import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutModule } from './workout/workout.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CreateWorkoutModule } from './create-workout/create-workout.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    WorkoutModule,
    DashboardModule,
    LoginModule,
    RegisterModule,
    CreateWorkoutModule,
  ],
})
export class PagesModule {}
