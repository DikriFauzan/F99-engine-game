import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export const LiveOpsPanel: React.FC = () => {
  return (
    <div className="h-full bg-slate-950 p-6">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold text-white">LiveOps Dashboard</h2>
        <div className="text-right">
            <p className="text-xs text-gray-500">TARGET ARR</p>
            <p className="text-xl font-bold text-green-400">$1,000,000</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-900 p-4 rounded border border-gray-800">
            <DollarSign className="text-green-400 w-5 h-5 mb-2" />
            <p className="text-2xl text-white font-bold">$4,250</p>
            <p className="text-xs text-gray-500">Daily Revenue</p>
        </div>
        <div className="bg-slate-900 p-4 rounded border border-gray-800">
            <Users className="text-blue-400 w-5 h-5 mb-2" />
            <p className="text-2xl text-white font-bold">12.5k</p>
            <p className="text-xs text-gray-500">DAU</p>
        </div>
        <div className="bg-slate-900 p-4 rounded border border-gray-800">
            <TrendingUp className="text-purple-400 w-5 h-5 mb-2" />
            <p className="text-2xl text-white font-bold">42%</p>
            <p className="text-xs text-gray-500">Retention D1</p>
        </div>
      </div>
    </div>
  );
};
