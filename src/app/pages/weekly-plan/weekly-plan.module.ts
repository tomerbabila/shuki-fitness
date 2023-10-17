import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { WeeklyPlanComponent } from './weekly-plan.component';

@NgModule({
  declarations: [WeeklyPlanComponent],
  imports: [CommonModule, SharedModule],
  exports: [WeeklyPlanComponent],
})
export class WeeklyPlanModule {}
