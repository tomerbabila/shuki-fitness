import { Timestamp } from '@firebase/firestore';

export interface WorkoutModel {
  id: string;
  date: Timestamp;
  title: string;
  desc: string;
  currentMembers: number;
  totalMembers: number;
  difficulty: 'hard' | 'intermediate' | 'easy';
  duration: number;
  visible: boolean;
}
