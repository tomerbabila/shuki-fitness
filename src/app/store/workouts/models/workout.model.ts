export interface WorkoutModel {
  date: Date;
  title: string;
  desc: string;
  currentMembers: number;
  totalMembers: number;
  difficulty: 'hard' | 'intermediate' | 'easy';
  duration: number;
  enable: boolean;
}
