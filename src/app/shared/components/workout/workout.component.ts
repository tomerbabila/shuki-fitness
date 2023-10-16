import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent {
  @Input() title!: string;
  @Input() desc!: string;
  // @Input() date!: Date;
  // @Input() currentMembers = 0;
  // @Input() totalMembers!: number;
}
