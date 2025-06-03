import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'
import { openai } from '../../utils/openaiClient'

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
  
  const apiKey = req.headers['x-api-key']
  if (apiKey !== process.env.API_SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { frage } = req.body
  if (!frage) {
    return res.status(400).json({ error: 'Missing field: frage' })
  }

  try {
    // 1. Embedding der Frage erzeugen
    const embeddingRes = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: frage
    })
    const frageEmbedding = embeddingRes.data[0].embedding

    // 2. Ähnlichstes Wissen aus Supabase abrufen
    const { data, error } = await supabase.rpc('match_documents', {
      query_embedding: frageEmbedding,
      match_count: 3
    })

    if (error) throw error

    const kontext = data.map((d: any, i: number) => `Quellenblock ${i + 1}:\n${d.content}`).join('\n\n')

    // 3. GPT-Antwort generieren
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `Beantworte die Nutzerfrage basierend auf dem bereitgestellten Wissen. Nutze ausschließlich die Inhalte aus dem Kontext.`
        },
        {
          role: 'user',
          content: `Frage: ${frage}\n\nKontext:\n${kontext}`
        }
      ],
      temperature: 0.3,
      max_tokens: 700
    })

    const antwort = completion.choices[0].message?.content || 'Keine Antwort generiert.'

    return res.status(200).json({ antwort })
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
