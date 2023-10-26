import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { WeeklyPlanComponent } from './weekly-plan.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [WeeklyPlanComponent],
  imports: [CommonModule, SharedModule, MatButtonModule, MatCardModule],
  exports: [WeeklyPlanComponent],
})
export class WeeklyPlanModule {}
