export type Page = 'dashboard' | 'classes' | 'students' | 'payments' | 'communication';

export interface Class {
  id: string;
  name: string;
  time: string;
  duration: number;
  studentsCount: number;
  maxStudents: number;
  teacher: {
    name: string;
    avatar: string;
  };
  price: number;
  color: string;
  icon: string;
}

export interface Student {
  id: string;
  name: string;
  avatar: string;
  class: string;
  teacher: string;
  attendance: number;
  paymentStatus: 'paid' | 'overdue' | 'partial' | 'pending';
  age?: number;
}
