import { Routes } from '@angular/router';
import { adminGuard } from '@shared/guards';
import { WorkoutComponent } from './pages/workout/workout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateWorkoutComponent } from './pages/create-workout/create-workout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'workout',
    children: [
      {
        path: 'new',
        component: CreateWorkoutComponent,
        canActivate: [adminGuard],
      },
      {
        path: 'edit/:id',
        component: CreateWorkoutComponent,
        canActivate: [adminGuard],
      },
      { path: ':id', component: WorkoutComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
