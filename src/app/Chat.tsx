'use client'

import { useChat } from '@ai-sdk/react'

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({})

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
        </form>
      </div>
    </>
  )
}
