import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
})
const model = openrouter('google/gemini-2.0-flash-001')

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model,
    messages,
    onChunk: ({ chunk }) => {
      if (chunk.type === 'text-delta') {
        console.log('text-delta', chunk.textDelta)
      }
    },
  })

  return result.toDataStreamResponse()
}
