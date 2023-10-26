import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { WeeklyPlanComponent } from './weekly-plan.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WeeklyPlanComponent],
  imports: [CommonModule, SharedModule, MatButtonModule],
  exports: [WeeklyPlanComponent],
})
export class WeeklyPlanModule {}
