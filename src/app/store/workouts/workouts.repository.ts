import { Injectable } from '@angular/core';
import { BaseRepository } from '../base.repository';
import { WorkoutModel } from './models';

@Injectable({ providedIn: 'root' })
export class WorkoutsRepository extends BaseRepository<WorkoutModel> {
  constructor() {
    super('workouts');
  }
}
