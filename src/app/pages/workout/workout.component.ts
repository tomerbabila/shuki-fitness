import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent {
  // TODO: remove all inputs and use state
  @Input() title = 'asdasd';
  @Input() desc = 'ASasdasd';
  @Input() date: Date = new Date();
  @Input() currentMembers = 0;
  @Input() totalMembers = 12;
  @Input() difficulty: 'hard' | 'intermediate' | 'easy' = 'intermediate';
  @Input() duration = 6000000;

  get isFullBooked() {
    return this.currentMembers === this.totalMembers;
  }
}
