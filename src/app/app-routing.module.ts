import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutComponent } from './pages/workout/workout.component';
import { WeeklyPlanComponent } from './pages/weekly-plan/weekly-plan.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'workout/:id', component: WorkoutComponent },
  { path: 'weekly-plan', component: WeeklyPlanComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/weekly-plan', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
