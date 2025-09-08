import React from 'react';
import { Users, Activity } from 'lucide-react';
import { mockUsers } from '../../data/mockData';

export const TeamOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Users className="mr-2" size={20} />
          Equipo
        </h3>
        <span className="text-sm text-gray-500">{mockUsers.length} miembros</span>
      </div>
      
      <div className="space-y-4">
        {mockUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Activity size={16} className="text-green-500" />
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">85%</p>
            <p className="text-xs text-gray-600">Productividad</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-xs text-gray-600">Tareas completadas</p>
          </div>
        </div>
      </div>
    </div>
  );
};