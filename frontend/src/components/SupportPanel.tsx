import React from 'react';
import { SupportTicket } from '../types';
import { MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

export const SupportPanel: React.FC = () => {
  const tickets: SupportTicket[] = [
    { id: '101', user: 'Player1', issue: 'Game crash', status: 'open', priority: 'high' },
    { id: '102', user: 'WhaleUser', issue: 'IAP failed', status: 'pending', priority: 'critical' }
  ];

  return (
    <div className="h-full bg-slate-950 p-6">
      <h2 className="text-xl font-bold text-white mb-4">Player Support</h2>
      <div className="space-y-3">
        {tickets.map(t => (
          <div key={t.id} className="bg-slate-900 p-4 rounded border border-gray-800 flex justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs">#{t.id}</span>
                <span className="text-white font-bold">{t.issue}</span>
                {t.priority === 'critical' && <span className="text-[10px] bg-red-900 text-red-400 px-1 rounded">CRITICAL</span>}
              </div>
              <p className="text-xs text-gray-400">User: {t.user}</p>
            </div>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Reply</button>
          </div>
        ))}
      </div>
    </div>
  );
};
