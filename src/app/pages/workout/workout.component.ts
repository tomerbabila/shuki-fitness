import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.workoutService.getWorkoutById(this.id).subscribe(selectedWorkout => {
      if (selectedWorkout) {
        this.workout = selectedWorkout;
      }
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
