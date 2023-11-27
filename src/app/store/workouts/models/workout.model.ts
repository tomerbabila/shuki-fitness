import { Timestamp } from '@firebase/firestore';
import { DifficultyEnum } from './difficulty.model';

export interface WorkoutModel {
  id: string;
  date: Timestamp;
  title: string;
  desc: string;
  currentMembers: number;
  totalMembers: number;
  difficulty: DifficultyEnum;
  duration: number;
  visible: boolean;
}
