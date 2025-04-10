'use client'

import { useChat } from '@ai-sdk/react'

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, stop } = useChat()

  return (
    <>
      <div className="flex flex-col gap-2 p-4">
        {messages.map((message) => (
          <div key={message.id} className="p-2 border">
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex flex-row gap-2">
          <input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            className="p-2 border"
          />
          <button type="submit" className="p-2 border">
            Submit
          </button>
          <button type="button" onClick={stop} className="p-2 border">
            Stop
          </button>
          <button
            type="button"
            onClick={() => {
              handleSubmit()
              setTimeout(() => {
                stop()
              }, 200)
            }}
            className="p-2 border"
          >
            Submit and Stop after 200ms
          </button>
          <button
            type="button"
            onClick={() => {
              handleSubmit()
              setTimeout(() => {
                stop()
              }, 1000)
            }}
            className="p-2 border"
          >
            Submit and Stop after 1s
          </button>
          <button
            type="button"
            onClick={() => {
              handleSubmit()
              setTimeout(() => {
                stop()
              }, 2000)
            }}
            className="p-2 border"
          >
            Submit and Stop after 2s
          </button>
        </form>
      </div>
    </>
  )
}
