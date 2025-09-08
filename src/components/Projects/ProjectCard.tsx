import React from 'react';
import { Calendar, Users, TrendingUp, Clock } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    Planning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Active: 'bg-green-100 text-green-800 border-green-200',
    'On Hold': 'bg-gray-100 text-gray-800 border-gray-200',
    Completed: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  const progressPercentage = (project.completedStoryPoints / project.totalStoryPoints) * 100;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{project.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progreso</span>
          <span className="font-medium text-gray-900">
            {project.completedStoryPoints}/{project.totalStoryPoints} SP
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{project.team.length} miembros</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>{project.sprints.length} sprints</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {project.owner.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{project.owner.name}</p>
                <p className="text-xs text-gray-500">{project.owner.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <TrendingUp size={16} className="text-green-500" />
              <span className="text-sm font-medium text-green-600">
                {Math.round(progressPercentage)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};