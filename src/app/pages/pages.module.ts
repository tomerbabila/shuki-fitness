import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutModule } from './workout/workout.module';
import { WeeklyPlanModule } from './weekly-plan/weekly-plan.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [CommonModule],
  exports: [WorkoutModule, WeeklyPlanModule, LoginModule],
})
export class PagesModule {}
