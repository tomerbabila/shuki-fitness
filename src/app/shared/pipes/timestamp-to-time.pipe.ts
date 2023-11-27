import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timestampToTime' })
export class TimestampToTimePipe implements PipeTransform {
  transform(workoutTimestamp: number): string {
    if (isNaN(workoutTimestamp) || workoutTimestamp < 0) {
      return 'Invalid Timestamp';
    }

    const minutes = Math.floor(workoutTimestamp / 60000); // 1 minute = 60000 milliseconds
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (hours < 24) {
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''}`;
      } else {
        return `${hours} hour${
          hours !== 1 ? 's' : ''
        } and ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
      }
    } else {
      return `${days} day${days !== 1 ? 's' : ''}`;
    }
  }
}
