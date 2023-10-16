import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { WorkoutModule } from './components/workout/workout.module';

@NgModule({
  imports: [CommonModule],
  exports: [TranslateModule, HeaderModule, WorkoutModule],
})
export class SharedModule {}
