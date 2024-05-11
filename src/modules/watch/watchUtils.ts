export const formatVideoDuration = (duration?: number) => {
  if (!duration) return '00:00:00';

  const hours = Math.floor(Math.round(duration) / 3600);
  const minutes = Math.floor((Math.round(duration) % 3600) / 60);
  const seconds = Math.round(duration) % 60;

  const paddedHours = hours.toString().padStart(2, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}