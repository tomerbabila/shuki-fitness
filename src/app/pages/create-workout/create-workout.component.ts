import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '@shared/services';
import { DifficultyEnum } from '@store/workouts/models';
import { millisecondsToMinutes } from '@utils/helpers';
import { TimeValidators } from '@utils/validators';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss'],
})
export class CreateWorkoutComponent implements OnInit {
  difficultyEnum = DifficultyEnum;
  WorkoutForm!: FormGroup;
  isEdit = false;
  id = '';

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.WorkoutForm = this.fb.group({
      title: ['', [Validators.required]],
      desc: [''],
      difficulty: [DifficultyEnum.easy, [Validators.required]],
      duration: [
        60,
        [Validators.required, TimeValidators.durationGreaterThan(10)],
      ],
      date: [
        new Date(),
        [Validators.required, TimeValidators.dateGreaterThanToday],
      ],
      totalMembers: [10, [Validators.required, Validators.min(2)]],
      visible: [true, [Validators.required]],
    });

    if (this.id) {
      this.isEdit = true;
      this.workoutService.getWorkoutById(this.id).subscribe(wo => {
        if (!wo) {
          this.router.navigate(['/']);
          return;
        }

        this.WorkoutForm.patchValue({
          ...wo,
          date: wo.date.toDate(),
          duration: millisecondsToMinutes(wo.duration),
        });
      });
    }
  }

  submitWorkoutForm() {
    if (this.isEdit) {
      this.workoutService.updateWorkout(this.id, this.WorkoutForm.value);
    } else {
      this.workoutService.createWorkout(this.WorkoutForm.value);
    }
  }

  get title() {
    return this.WorkoutForm.get('title');
  }
}
