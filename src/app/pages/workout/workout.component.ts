import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutsRepository, WorkoutsStore } from '@store/workouts';
import { WorkoutModel } from '@store/workouts/models';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  workout!: WorkoutModel;

  constructor(
    private workoutsRepository: WorkoutsRepository,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.workoutsRepository.readById(id).subscribe(selectedWorkout => {
      if (selectedWorkout) {
        this.workout = selectedWorkout;
      }
    });
  }

  get isFullBooked() {
    return this.workout.currentMembers === this.workout.totalMembers;
  }
}
