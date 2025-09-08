import React from 'react';
import { TrendingDown } from 'lucide-react';
import { burndownData } from '../../data/mockData';

export const BurndownChart: React.FC = () => {
  const maxValue = Math.max(...burndownData.map(d => Math.max(d.ideal, d.actual)));
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <TrendingDown className="mr-2" size={20} />
            Burndown Chart - Sprint Actual
          </h3>
          <p className="text-sm text-gray-600">Progreso del sprint vs. línea ideal</p>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>Ideal</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Real</span>
          </div>
        </div>
      </div>
      
      <div className="relative h-64">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="idealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.1}} />
              <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 0}} />
            </linearGradient>
            <linearGradient id="actualGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#10B981', stopOpacity: 0.1}} />
              <stop offset="100%" style={{stopColor: '#10B981', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="0"
              y1={`${(i / 4) * 100}%`}
              x2="100%"
              y2={`${(i / 4) * 100}%`}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}
          
          {/* Ideal line */}
          <polyline
            fill="url(#idealGradient)"
            stroke="#3B82F6"
            strokeWidth="2"
            points={burndownData.map((d, i) => 
              `${(i / (burndownData.length - 1)) * 100}%,${100 - (d.ideal / maxValue) * 100}%`
            ).join(' ')}
          />
          
          {/* Actual line */}
          <polyline
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={burndownData.map((d, i) => 
              `${(i / (burndownData.length - 1)) * 100}%,${100 - (d.actual / maxValue) * 100}%`
            ).join(' ')}
          />
          
          {/* Data points */}
          {burndownData.map((d, i) => (
            <circle
              key={i}
              cx={`${(i / (burndownData.length - 1)) * 100}%`}
              cy={`${100 - (d.actual / maxValue) * 100}%`}
              r="4"
              fill="#10B981"
              stroke="white"
              strokeWidth="2"
            />
          ))}
        </svg>
        
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-8">
          {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0].map((value, i) => (
            <span key={i}>{Math.round(value)}</span>
          ))}
        </div>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 -mb-6">
          <span>Día 1</span>
          <span>Día 5</span>
          <span>Día 10</span>
          <span>Día 14</span>
        </div>
      </div>
    </div>
  );
};