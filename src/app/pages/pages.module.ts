import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkoutModule } from './workout/workout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  exports: [WorkoutModule],
})
export class PagesModule {}
