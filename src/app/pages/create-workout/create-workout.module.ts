import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkoutComponent } from './create-workout.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateWorkoutComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [CreateWorkoutComponent],
})
export class CreateWorkoutModule {}
