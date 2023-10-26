import { Component } from '@angular/core';
import { AuthService } from '@shared/services';
import { UserStore } from '@store/user';
import { WorkoutsStore, WorkoutsRepository } from '@store/workouts';

@Component({
  selector: 'app-weekly-plan',
  templateUrl: './weekly-plan.component.html',
  styleUrls: ['./weekly-plan.component.scss'],
})
export class WeeklyPlanComponent {
  constructor(
    public authService: AuthService,
    public userStore: UserStore,
    public workoutStore: WorkoutsStore,
    private workoutRepository: WorkoutsRepository
  ) {
    this.workoutStore.workouts$.subscribe(w => console.log(w));
  }

  createWorkout() {
    this.workoutRepository.create({
      title: 'Test',
      desc: 'Test',
      currentMembers: 0,
      date: new Date(),
      difficulty: 'easy',
      duration: 60000,
      visible: false,
      totalMembers: 10,
    });
  }

  openPopover() {
    if (this.authService.canRead()) {
      console.log('YAY');
    } else {
      console.log('OOP');
    }
  }

  deleteWorkout(id: string) {
    this.workoutRepository.delete(id);
  }

  changeWorkoutVisibility() {
    // TODO: change workout visibility
  }
}
