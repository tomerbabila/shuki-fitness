import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '@shared/services';
import { WorkoutModel } from '@store/workouts/models';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  workout!: WorkoutModel;
  id!: string;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.workoutService.getWorkoutById(this.id).subscribe(wo => {
      if (!wo) {
        this.router.navigate(['/']);
        return;
      }

      this.workout = wo;
    });
  }

  registerForWorkout() {
    this.workoutService.registerForWorkout(this.id);
  }

  removeFromWorkout() {
    this.workoutService.removeFromWorkout(this.id);
  }

  get isRegisteredToWorkout() {
    return this.workoutService.checkIfUserRegisterToWorkout(this.id);
  }

  get isFullBooked() {
    return this.workout.currentMembers === this.workout.totalMembers;
  }
}
