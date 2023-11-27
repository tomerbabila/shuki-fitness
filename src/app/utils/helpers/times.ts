export function minutesToMilliseconds(minutes: number): number {
  const millisecondsPerMinute = 60 * 1000;
  const milliseconds = minutes * millisecondsPerMinute;
  return milliseconds;
}

export function millisecondsToMinutes(milliseconds: number): number {
  const millisecondsPerMinute = 60 * 1000;
  const minutes = milliseconds / millisecondsPerMinute;

  return minutes;
}
