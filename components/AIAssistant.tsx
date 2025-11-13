'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

// Initialize Bytez SDK dynamically - only on client side
// This function is only called in useEffect, so it won't run during SSR
const initializeAI = async () => {
  // Double check we're on client
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null
  }
  
  try {
    // Dynamic import to avoid SSR issues
    const bytezModule = await import('bytez.js')
    const Bytez = bytezModule.default || bytezModule
    
    if (!Bytez || typeof Bytez !== 'function') {
      throw new Error('Bytez not found or invalid')
    }
    
    const key = 'ae45e701afc7b9c2210e845f353d5cf5'
    const sdk = new Bytez(key)
    
    if (!sdk || typeof sdk.model !== 'function') {
      throw new Error('SDK initialization failed')
    }
    
    // choose Qwen3-4B-Instruct-2507
    const model = sdk.model('Qwen/Qwen3-4B-Instruct-2507')
    
    return model
  } catch (error) {
    console.error('Failed to initialize Bytez:', error)
    return null
  }
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI travel assistant. How can I help you plan your Moroccan adventure?',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [aiModel, setAiModel] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only initialize on client side
    if (typeof window !== 'undefined') {
      initializeAI().then((model) => {
        setAiModel(model)
      }).catch((error) => {
        console.error('Error initializing AI:', error)
      })
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    }

    // Update messages with user message
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Ensure we're on client side
      if (typeof window === 'undefined') {
        throw new Error('AI only works on client side')
      }

      let modelToUse = aiModel
      
      if (!modelToUse) {
        // Initialize if not already done
        modelToUse = await initializeAI()
        if (!modelToUse) {
          throw new Error('AI model not available. Please refresh the page.')
        }
        setAiModel(modelToUse)
      }

      // Get current messages for API call
      const currentMessages = [...messages, userMessage]
      
      // send input to model
      // const { error, output } = await model.run([{ "role": "user", "content": "Hello" }])
      try {
        const { error, output } = await modelToUse.run(
          currentMessages.map((msg) => ({
            role: msg.role,
            content: typeof msg.content === 'string' ? msg.content : String(msg.content),
          }))
        )
        
        console.log({ error, output })
        
        if (error) {
          console.error('AI Error:', error)
          setMessages((prevMsgs) => [
            ...prevMsgs,
            {
              role: 'assistant',
              content: 'Sorry, I encountered an error. Please try again.',
            },
          ])
        } else {
          // Ensure output is a string
          let responseText = 'I\'m here to help! What would you like to know about Morocco?'
          if (output) {
            if (typeof output === 'string') {
              responseText = output
            } else if (typeof output === 'object' && output !== null) {
              // Handle object response - try to extract text
              responseText = output.text || output.content || output.message || output.response || JSON.stringify(output)
            } else {
              responseText = String(output)
            }
          }
          
          setMessages((prevMsgs) => [
            ...prevMsgs,
            {
              role: 'assistant',
              content: responseText,
            },
          ])
        }
      } catch (apiError: any) {
        console.error('AI API Error:', apiError)
        setMessages((prevMsgs) => [
          ...prevMsgs,
          {
            role: 'assistant',
            content: 'Sorry, I encountered an error. Please try again.',
          },
        ])
      } finally {
        setIsLoading(false)
      }
    } catch (err: any) {
      console.error('AI Error:', err)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: err?.message || 'Sorry, I encountered an error. Please try again.',
        },
      ])
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-16 h-16 bg-[#d4a574] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#b8915f] transition-all"
        aria-label="Open AI Assistant"
        style={{ zIndex: 9999 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[100] w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
            style={{ zIndex: 9998 }}
          >
            {/* Header */}
            <div className="bg-[#d4a574] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot size={24} />
                <div>
                  <h3 className="font-semibold">AI Travel Assistant</h3>
                  <p className="text-xs text-white/80">Ask me anything about Morocco</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p className="text-sm">{error}</p>
                </div>
              )}
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {typeof message.content === 'string' 
                        ? message.content 
                        : JSON.stringify(message.content)}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl px-4 py-2 shadow-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Morocco..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-[#d4a574] text-white rounded-lg hover:bg-[#b8915f] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

