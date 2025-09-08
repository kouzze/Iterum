import React from 'react';
import { StatsCard } from './StatsCard';
import { TasksList } from './TasksList';
import { BurndownChart } from './BurndownChart';
import { TeamOverview } from './TeamOverview';
import { 
  FolderOpen, 
  CheckCircle, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import { mockProjects, mockTasks } from '../../data/mockData';

export const Dashboard: React.FC = () => {
  const activeProjects = mockProjects.filter(p => p.status === 'Active').length;
  const completedTasks = mockTasks.filter(t => t.status === 'Done').length;
  const pendingTasks = mockTasks.filter(t => t.status !== 'Done').length;
  const overdueTasks = mockTasks.filter(t => new Date(t.dueDate) < new Date()).length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">Resumen general de todos tus proyectos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Proyectos Activos"
          value={activeProjects}
          change="+2 este mes"
          changeType="positive"
          icon={FolderOpen}
          color="blue"
        />
        <StatsCard
          title="Tareas Completadas"
          value={completedTasks}
          change="+12% esta semana"
          changeType="positive"
          icon={CheckCircle}
          color="green"
        />
        <StatsCard
          title="Tareas Pendientes"
          value={pendingTasks}
          change="-5 desde ayer"
          changeType="positive"
          icon={Clock}
          color="orange"
        />
        <StatsCard
          title="Tareas Vencidas"
          value={overdueTasks}
          change="Requiere atención"
          changeType="negative"
          icon={AlertTriangle}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BurndownChart />
        </div>
        <div>
          <TeamOverview />
        </div>
      </div>

      <div>
        <TasksList />
      </div>
    </div>
  );
};