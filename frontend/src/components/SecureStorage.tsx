import React from 'react';
import { HardDrive, Lock } from 'lucide-react';

export const SecureStorage: React.FC = () => {
  return (
    <div className="flex items-center gap-2 bg-slate-900/50 border border-green-900/50 px-3 py-1 rounded-full text-xs">
      <HardDrive className="w-3 h-3 text-gray-400" />
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 font-mono">SECURE VAULT</span>
        <div className="w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[15%]"></div>
        </div>
      </div>
      <Lock className="w-3 h-3 text-green-500 ml-1" />
    </div>
  );
};
