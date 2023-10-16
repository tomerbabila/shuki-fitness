import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [WorkoutComponent],
  imports: [CommonModule, MatCardModule],
  exports: [WorkoutComponent],
})
export class WorkoutModule {}
