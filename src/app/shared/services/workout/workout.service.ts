import { Injectable } from '@angular/core';
import { increment } from '@angular/fire/firestore';
import { filter } from 'rxjs';
import { UserRepository, UserStore } from '@store/user';
import { WorkoutsRepository } from '@store/workouts';
import { UserModel } from '@store/user/models';

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  private user!: UserModel;

  constructor(
    private userRepository: UserRepository,
    private userStore: UserStore,
    private workoutRepository: WorkoutsRepository
  ) {
    this.userStore.user$
      .pipe(filter(val => !!val))
      .subscribe(user => (this.user = user));
  }

  registerForWorkout(workoutId: string) {
    this.workoutRepository.update(workoutId, {
      currentMembers: increment(1) as unknown as number,
    });

    const newWorkouts = [...this.user.workouts, workoutId];
    this.userRepository.update(this.user.uid, {
      workouts: newWorkouts,
    });
  }

  removeFromWorkout(workoutId: string) {
    this.workoutRepository.update(workoutId, {
      currentMembers: increment(-1) as unknown as number,
    });

    const filteredWorkouts = this.user.workouts.filter(wId => {
      return wId !== workoutId;
    });
    this.userRepository.update(this.user.uid, {
      workouts: [...filteredWorkouts],
    });
  }

  getWorkoutById(workoutId: string) {
    return this.workoutRepository.readById(workoutId);
  }

  checkIfUserRegisterToWorkout(workoutId: string) {
    return this.user.workouts.includes(workoutId);
  }
}