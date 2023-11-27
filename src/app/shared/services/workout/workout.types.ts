import { WorkoutModel } from '@store/workouts/models';

export type EditableWorkoutModel = Omit<WorkoutModel, 'date'> & { date: Date };
