import { Injectable } from '@angular/core';
import { BaseStore } from '../base.store';
import { WorkoutModel, WorkoutsStateModel } from './models';
import { initialState } from './initial-state';
import { Observable, combineLatest, of, switchMap } from 'rxjs';
import { WorkoutsRepository } from './workouts.repository';
import { UserStore } from '@store/user';

@Injectable({ providedIn: 'root' })
export class WorkoutsStore extends BaseStore<WorkoutsStateModel> {
  workouts$: Observable<WorkoutModel[]> = combineLatest([
    this.select(state => state.workouts),
    this.userStore.user$,
  ]).pipe(
    switchMap(([workouts, user]) => {
      if (user.roles.admin) {
        return of(workouts);
      } else {
        return of(workouts.filter(w => w.visible));
      }
    })
  );

  constructor(
    private workoutsRepository: WorkoutsRepository,
    private userStore: UserStore
  ) {
    super(initialState);

    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workoutsRepository.readAll().subscribe(workouts => {
      this.setState({ workouts: workouts });
    });
  }
}
