import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyPlanComponent } from './weekly-plan.component';

@NgModule({
  declarations: [WeeklyPlanComponent],
  imports: [CommonModule],
  exports: [WeeklyPlanComponent],
})
export class WeeklyPlanModule {}
