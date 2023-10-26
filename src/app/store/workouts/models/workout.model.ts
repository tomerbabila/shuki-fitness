export interface WorkoutModel {
  id: string;
  date: Date;
  title: string;
  desc: string;
  currentMembers: number;
  totalMembers: number;
  difficulty: 'hard' | 'intermediate' | 'easy';
  duration: number;
  visible: boolean;
}
