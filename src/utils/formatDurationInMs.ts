import { default as formatDuration } from 'format-duration';

export const formatDurationInMs = (duration: number) =>
  formatDuration(duration, { ms: true }).replace('0:', '');
