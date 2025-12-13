import React, { useState, useRef, useEffect } from 'react';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am the AI assistant for this portfolio. Ask me anything about Hritvik.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userText }]);

    try {
      // Create a placeholder for the AI response
      setMessages(prev => [...prev, { role: 'model', text: '', isThinking: true }]);

      const stream = await streamChatResponse(userText, messages);
      
      let fullText = '';
      
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
           fullText += c.text;
           setMessages(prev => {
             const newMsgs = [...prev];
             const lastMsg = newMsgs[newMsgs.length - 1];
             if (lastMsg.role === 'model') {
               lastMsg.text = fullText;
               lastMsg.isThinking = false;
             }
             return newMsgs;
           });
        }
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [
        ...prev, 
        { role: 'model', text: 'Apologies, I am currently unable to connect to the server.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white border border-gray-200 shadow-xl w-80 md:w-96 h-96 mb-4 rounded-lg flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <h3 className="text-sm font-serif tracking-wide italic">Ask AI about Hritvik</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              &times;
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 text-sm rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-black text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-black rounded-bl-none'
                  }`}
                >
                  {msg.text}
                  {msg.isThinking && <span className="animate-pulse">...</span>}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent outline-none text-sm px-2 font-sans"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="text-xs uppercase font-bold tracking-wider hover:underline disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-200"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>
    </div>
  );
};

export default GeminiChat;