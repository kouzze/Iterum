import React from 'react';
import { Mail, Activity, Calendar } from 'lucide-react';
import { User } from '../../types';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const roleColors = {
    'Product Owner': 'bg-purple-100 text-purple-800 border-purple-200',
    'Scrum Master': 'bg-blue-100 text-blue-800 border-blue-200',
    'Developer': 'bg-green-100 text-green-800 border-green-200',
    'QA': 'bg-orange-100 text-orange-800 border-orange-200'
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${roleColors[user.role]}`}>
              {user.role}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${user.active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className="text-sm text-gray-600">
            {user.active ? 'Activo' : 'Inactivo'}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Mail size={16} className="mr-2" />
          <span>{user.email}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Activity size={16} className="mr-2" />
          <span>Activo en 3 proyectos</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2" />
          <span>Última actividad: hace 2 horas</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-blue-600">12</p>
            <p className="text-xs text-gray-600">Tareas completadas</p>
          </div>
          <div>
            <p className="text-lg font-bold text-green-600">95%</p>
            <p className="text-xs text-gray-600">Eficiencia</p>
          </div>
        </div>
      </div>
    </div>
  );
};