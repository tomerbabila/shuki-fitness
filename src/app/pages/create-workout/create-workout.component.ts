import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '@shared/services';
import { DifficultyEnum } from '@store/workouts/models';
import { TimeValidators } from '@utils/validators';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss'],
})
export class CreateWorkoutComponent implements OnInit {
  difficultyEnum = DifficultyEnum;
  createWorkoutForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService
  ) {}

  ngOnInit() {
    this.createWorkoutForm = this.fb.group({
      title: ['', [Validators.required]],
      desc: [''],
      difficulty: [DifficultyEnum.easy, [Validators.required]],
      duration: [
        3600000,
        [Validators.required, TimeValidators.durationGreaterThan(1800000)],
      ],
      date: [
        new Date(),
        [Validators.required, TimeValidators.dateGreaterThanToday],
      ],
      totalMembers: [10, [Validators.required, Validators.min(2)]],
      visible: [true, [Validators.required]],
    });
  }

  createWorkout() {
    this.workoutService.createWorkout(this.createWorkoutForm.value);
  }

  get title() {
    return this.createWorkoutForm.get('title');
  }
}
