import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkoutModule } from './workout/workout.module';
import { WeeklyPlanModule } from './weekly-plan/weekly-plan.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  exports: [WorkoutModule, WeeklyPlanModule],
})
export class PagesModule {}
