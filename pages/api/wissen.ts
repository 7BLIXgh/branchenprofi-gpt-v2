import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'
import { openai } from '../../utils/openaiClient'

if (!process.env.OPENAI_API_KEY) {
  console.warn("Kein OpenAI API Key gesetzt – Embedding wird übersprungen.");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' })
  }
  console.log("⬅️ Request-Methode:", req.method)
  const apiKey = req.headers['x-api-key']
  if (apiKey !== process.env.API_SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { content, branche, region, metadata, update_von } = req.body
  if (!content || !branche || !region) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
let embedding: number[] | null = null;

try {
    const embedRes = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: content.slice(0, 8000),
  });

  if (
    Array.isArray(embedRes.data[0]?.embedding) &&
    embedRes.data[0].embedding.length === 1536
  ) {
    embedding = embedRes.data[0].embedding;
  } else {
    console.warn("⚠️ Ungültiges embedding-Format oder Länge");
  }
} catch (err: any) {
  console.error("❌ Fehler beim Erzeugen von embedding:", err.message);
}

  if (process.env.NODE_ENV === 'development') {
    if (embedding && Array.isArray(embedding)) {
      console.log("✅ GPT-Embedding erzeugt – Länge:", embedding.length);
    }  
  }
    const insertPayload: any = {
  content,
  branche,
  region,
  metadata: metadata || {},
  version: 1,
  update_von: update_von || null,
};

if (embedding) {
  insertPayload.embedding = embedding;
}

const { data, error } = await supabase
  .from('wissen')
  .insert(insertPayload)
  .select('id');


    if (error) throw error

    return res.status(200).json({ status: 'ok', id: data[0].id })
  } catch (err: any) {
  const fehlerId = `FEHLER-${Date.now()}`
  console.error(`❌ ${fehlerId}:`, err.stack || err.message || err)

  return res.status(500).json({
    error: 'Interner Serverfehler',
    fehlerId,
    debug: process.env.NODE_ENV === 'development' ? (err.message || err) : undefined
  })
}

}
