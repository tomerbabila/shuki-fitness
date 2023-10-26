import { Component } from '@angular/core';
import { AuthService } from '@shared/services';
import { UserStore } from '@store/user';
import { WorkoutsRepository } from '@store/workouts/workouts.repository';

@Component({
  selector: 'app-weekly-plan',
  templateUrl: './weekly-plan.component.html',
  styleUrls: ['./weekly-plan.component.scss'],
})
export class WeeklyPlanComponent {
  constructor(
    public authService: AuthService,
    public userStore: UserStore,
    private workoutRepository: WorkoutsRepository
  ) {}

  createWorkout() {
    this.workoutRepository.create({
      title: 'Test',
      desc: 'Test',
      currentMembers: 0,
      date: new Date(),
      difficulty: 'easy',
      duration: 60000,
      enable: false,
      totalMembers: 10,
    });
  }
}
