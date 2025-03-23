import { useState } from 'react'
import Navbar from './navbar'

export default function Bot() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResponse('')
  
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o', // 🔄 updated
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7
        })
      })
  
      const data = await res.json()
      console.log('GPT API response:', data) // 👁️ for debugging
  
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        setResponse(data.choices[0].message.content)
      } else {
        console.error(data)
        setError('No response from GPT. Check console for details.')
      }
    } catch (err) {
      console.error(err)
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }
  

  return (
<>
  <Navbar />
  <div className="w-screen min-h-screen flex flex-col items-center justify-start bg-[#F2F0EB]">
    <div className="w-full max-w-3xl flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 mt-8 text-center p-5">Chatbot</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex gap-2 mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask the bot anything..."
          className="flex-1 p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-3 rounded-xl bg-[#181520] text-white font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>

      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-4 min-h-[200px] whitespace-pre-wrap overflow-auto border border-gray-200">
        {error ? <span className="text-red-500">{error}</span> : response}
      </div>
    </div>
  </div>
</>
  )
}
