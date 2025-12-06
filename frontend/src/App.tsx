import React, { useState, useEffect } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { SecureStorage } from './components/SecureStorage';
import { SupportPanel } from './components/SupportPanel';
import { LiveOpsPanel } from './components/LiveOpsPanel';
import { Play, Layout, Database, Server, MessageSquare, TrendingUp } from 'lucide-react';
import { ChatMessage } from './types';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = (text: string) => {
    setIsProcessing(true);
    const newMsg: ChatMessage = { id: Date.now().toString(), sender: 'user', text, timestamp: Date.now() };
    setChatHistory(prev => [...prev, newMsg]);
    
    // Simulate AI Response
    setTimeout(() => {
        const aiMsg: ChatMessage = { 
            id: (Date.now()+1).toString(), 
            sender: 'ai', 
            text: `Processing command: "${text}". Dispatching agents...`, 
            timestamp: Date.now() 
        };
        setChatHistory(prev => [...prev, aiMsg]);
        setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-neo-bg text-white font-sans">
      {/* Sidebar */}
      <div className="w-16 bg-neo-panel border-r border-gray-800 flex flex-col items-center py-4 gap-4">
        <div className="w-10 h-10 bg-neo-accent rounded flex items-center justify-center mb-4">
            <Play className="text-black w-6 h-6" fill="currentColor" />
        </div>
        <button onClick={() => setActiveView('dashboard')} className={`p-2 rounded ${activeView === 'dashboard' ? 'bg-white/10 text-neo-accent' : 'text-gray-500'}`}><Layout /></button>
        <button onClick={() => setActiveView('liveops')} className={`p-2 rounded ${activeView === 'liveops' ? 'bg-white/10 text-neo-accent' : 'text-gray-500'}`}><TrendingUp /></button>
        <button onClick={() => setActiveView('support')} className={`p-2 rounded ${activeView === 'support' ? 'bg-white/10 text-neo-accent' : 'text-gray-500'}`}><MessageSquare /></button>
        <div className="mt-auto p-2"><Server className="text-green-500 w-5 h-5" /></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b border-gray-800 bg-neo-panel/50 flex items-center justify-between px-6 backdrop-blur">
            <h1 className="font-bold text-lg">NeoEngine <span className="text-neo-accent">PRO</span></h1>
            <SecureStorage />
        </header>
        
        <div className="flex-1 flex overflow-hidden">
            {activeView === 'dashboard' && (
                <>
                    <div className="flex-1 bg-black relative flex items-center justify-center">
                        <p className="text-gray-600 font-mono">3D Viewport Active</p>
                        {/* 3D Viewport would go here */}
                    </div>
                    <div className="w-96 border-l border-gray-800 bg-slate-900">
                        <ChatInterface history={chatHistory} onSendMessage={handleSendMessage} isProcessing={isProcessing} />
                    </div>
                </>
            )}
            {activeView === 'liveops' && <div className="flex-1"><LiveOpsPanel /></div>}
            {activeView === 'support' && <div className="flex-1"><SupportPanel /></div>}
        </div>
      </div>
    </div>
  );
}
