import React from 'react';
import { Calendar, User, AlertCircle } from 'lucide-react';
import { mockTasks } from '../../data/mockData';

export const TasksList: React.FC = () => {
  const priorityColors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-orange-100 text-orange-800',
    Critical: 'bg-red-100 text-red-800'
  };

  const statusColors = {
    'To Do': 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Review': 'bg-purple-100 text-purple-800',
    'Done': 'bg-green-100 text-green-800'
  };

  const isOverdue = (dueDate: string) => new Date(dueDate) < new Date();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Tareas Recientes</h3>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          Ver todas
        </button>
      </div>
      
      <div className="space-y-4">
        {mockTasks.map((task) => (
          <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="font-medium text-gray-900">{task.title}</h4>
                  {isOverdue(task.dueDate) && (
                    <AlertCircle size={16} className="text-red-500" />
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`px-2 py-1 rounded-full font-medium ${statusColors[task.status]}`}>
                    {task.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}>
                    {task.priority}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span className={isOverdue(task.dueDate) ? 'text-red-600 font-medium' : ''}>
                      {new Date(task.dueDate).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                  {task.assignee && (
                    <div className="flex items-center text-gray-500">
                      <User size={14} className="mr-1" />
                      <span>{task.assignee.name}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="ml-4 text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {task.storyPoints} SP
                </div>
                <div className="flex flex-wrap gap-1">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};