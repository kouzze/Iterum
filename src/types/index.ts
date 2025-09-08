export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Product Owner' | 'Scrum Master' | 'Developer' | 'QA';
  avatar?: string;
  active: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Review' | 'Done';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  storyPoints: number;
  assignee?: User;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  epic?: string;
}

export interface Sprint {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'Planning' | 'Active' | 'Review' | 'Completed';
  capacity: number;
  tasks: Task[];
  velocity: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Planning' | 'Active' | 'On Hold' | 'Completed';
  owner: User;
  team: User[];
  sprints: Sprint[];
  createdAt: string;
  totalStoryPoints: number;
  completedStoryPoints: number;
}

export interface BurndownData {
  date: string;
  ideal: number;
  actual: number;
  remaining: number;
}