import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'
import { openai } from '../../utils/openaiClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
    const embedRes = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: content.slice(0, 8000),
    })

    const embedding = embedRes.data[0].embedding

    const { data, error } = await supabase.from('wissen').insert({
      content,
      branche,
      region,
      metadata: metadata || {},
      version: 1,
      update_von: update_von || null,
      embedding,
    }).select('id')

    if (error) throw error

    return res.status(200).json({ status: 'ok', id: data[0].id })
  } catch (err: any) {
    console.error('❌ Upload error:', err)
    return res.status(500).json({ error: err.message || 'Upload failed' })
  }
}
