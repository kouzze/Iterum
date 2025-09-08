import { Project, User, Sprint, Task } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ana García',
    email: 'ana.garcia@company.com',
    role: 'Product Owner',
    active: true
  },
  {
    id: '2',
    name: 'Carlos López',
    email: 'carlos.lopez@company.com',
    role: 'Scrum Master',
    active: true
  },
  {
    id: '3',
    name: 'María Rodríguez',
    email: 'maria.rodriguez@company.com',
    role: 'Developer',
    active: true
  },
  {
    id: '4',
    name: 'Pedro Martínez',
    email: 'pedro.martinez@company.com',
    role: 'Developer',
    active: true
  },
  {
    id: '5',
    name: 'Laura Fernández',
    email: 'laura.fernandez@company.com',
    role: 'QA',
    active: true
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Implementar autenticación de usuarios',
    description: 'Desarrollar sistema de login y registro con JWT',
    status: 'In Progress',
    priority: 'High',
    storyPoints: 8,
    assignee: mockUsers[2],
    dueDate: '2025-01-20',
    createdAt: '2025-01-10',
    updatedAt: '2025-01-15',
    tags: ['Backend', 'Security'],
    epic: 'User Management'
  },
  {
    id: '2',
    title: 'Diseñar interfaz de dashboard',
    description: 'Crear mockups y prototipos del dashboard principal',
    status: 'Review',
    priority: 'Medium',
    storyPoints: 5,
    assignee: mockUsers[3],
    dueDate: '2025-01-18',
    createdAt: '2025-01-08',
    updatedAt: '2025-01-14',
    tags: ['Frontend', 'UI/UX'],
    epic: 'Dashboard'
  },
  {
    id: '3',
    title: 'Configurar pipeline CI/CD',
    description: 'Implementar deployment automático con GitHub Actions',
    status: 'To Do',
    priority: 'Medium',
    storyPoints: 13,
    assignee: mockUsers[2],
    dueDate: '2025-01-25',
    createdAt: '2025-01-12',
    updatedAt: '2025-01-12',
    tags: ['DevOps', 'Infrastructure'],
    epic: 'Development Setup'
  },
  {
    id: '4',
    title: 'Implementar tests unitarios',
    description: 'Crear suite de tests para componentes principales',
    status: 'Done',
    priority: 'High',
    storyPoints: 5,
    assignee: mockUsers[4],
    dueDate: '2025-01-15',
    createdAt: '2025-01-05',
    updatedAt: '2025-01-13',
    tags: ['Testing', 'Quality'],
    epic: 'Quality Assurance'
  }
];

export const mockSprints: Sprint[] = [
  {
    id: '1',
    name: 'Sprint 1 - Foundation',
    startDate: '2025-01-06',
    endDate: '2025-01-19',
    status: 'Active',
    capacity: 40,
    tasks: mockTasks,
    velocity: 28
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico moderna con React y Python',
    status: 'Active',
    owner: mockUsers[0],
    team: mockUsers,
    sprints: mockSprints,
    createdAt: '2025-01-01',
    totalStoryPoints: 100,
    completedStoryPoints: 35
  },
  {
    id: '2',
    name: 'Mobile Banking App',
    description: 'Aplicación bancaria móvil con funciones avanzadas',
    status: 'Planning',
    owner: mockUsers[1],
    team: [mockUsers[1], mockUsers[2], mockUsers[4]],
    sprints: [],
    createdAt: '2024-12-15',
    totalStoryPoints: 150,
    completedStoryPoints: 0
  }
];

export const burndownData = [
  { date: '2025-01-06', ideal: 40, actual: 40, remaining: 40 },
  { date: '2025-01-07', ideal: 37, actual: 38, remaining: 38 },
  { date: '2025-01-08', ideal: 34, actual: 35, remaining: 35 },
  { date: '2025-01-09', ideal: 31, actual: 32, remaining: 32 },
  { date: '2025-01-10', ideal: 28, actual: 30, remaining: 30 },
  { date: '2025-01-13', ideal: 25, actual: 25, remaining: 25 },
  { date: '2025-01-14', ideal: 22, actual: 20, remaining: 20 },
  { date: '2025-01-15', ideal: 19, actual: 18, remaining: 18 },
  { date: '2025-01-16', ideal: 16, actual: 15, remaining: 15 },
  { date: '2025-01-17', ideal: 13, actual: 12, remaining: 12 }
];