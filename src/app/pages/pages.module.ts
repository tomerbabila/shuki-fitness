import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutModule } from './workout/workout.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [CommonModule],
  exports: [WorkoutModule, DashboardModule, LoginModule, RegisterModule],
})
export class PagesModule {}
