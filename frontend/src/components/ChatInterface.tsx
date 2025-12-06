import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { Send, Bot, User } from 'lucide-react';

interface Props {
  history: ChatMessage[];
  onSendMessage: (msg: string) => void;
  isProcessing: boolean;
}

export const ChatInterface: React.FC<Props> = ({ history, onSendMessage, isProcessing }) => {
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="flex flex-col h-full bg-slate-950">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {history.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-blue-600' : 'bg-cyan-900 text-cyan-400'}`}>
              {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === 'user' ? 'bg-blue-600/20 text-blue-100' : 'bg-slate-800 text-gray-300'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isProcessing && <div className="text-xs text-gray-500 italic ml-12">AI Core is thinking...</div>}
        <div ref={bottomRef} />
      </div>
      <div className="p-4 bg-slate-900 border-t border-gray-800 flex gap-2">
        <input 
          className="flex-1 bg-black border border-gray-700 rounded p-2 text-white text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !isProcessing && (onSendMessage(input), setInput(''))}
          placeholder="Command the Core..."
        />
        <button onClick={() => { onSendMessage(input); setInput(''); }} disabled={isProcessing || !input.trim()} className="bg-neo-accent p-2 rounded text-black hover:bg-cyan-400">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
