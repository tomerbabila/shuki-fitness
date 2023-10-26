import { Injectable } from '@angular/core';
import { BaseStore } from '../base.store';
import { WorkoutModel, WorkoutsStateModel } from './models';
import { initialState } from './initial-state';
import { Observable } from 'rxjs';
import { WorkoutsRepository } from './workouts.repository';
@Injectable({ providedIn: 'root' })
export class WorkoutsStore extends BaseStore<WorkoutsStateModel> {
  workouts$: Observable<WorkoutModel[]> = this.select(state => state.workouts);

  constructor(private workoutsRepository: WorkoutsRepository) {
    super(initialState);

    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workoutsRepository.readAll().subscribe(workouts => {
      this.setState({ workouts: workouts });
    });
  }
}
