import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';

@NgModule({
  declarations: [WorkoutComponent, WorkoutDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [WorkoutComponent],
})
export class WorkoutModule {}
