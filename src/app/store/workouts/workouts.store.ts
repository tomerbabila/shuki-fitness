import { Injectable } from '@angular/core';
import { BaseStore } from '../base.store';
import { WorkoutModel } from './models';
import { initialState } from './initial-state';

@Injectable({ providedIn: 'root' })
export class WorkoutsStore extends BaseStore<WorkoutModel> {
  constructor() {
    super(initialState);
  }
}
