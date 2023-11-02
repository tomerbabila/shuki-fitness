import { Component, Input } from '@angular/core';
import { Icon } from '@shared/components/icon/icons';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss'],
})
export class WorkoutDetailComponent {
  @Input() icon!: Icon;
}
