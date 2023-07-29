import type { InferModel } from 'drizzle-orm';
import type {
  rounds,
  sessions,
  teams,
  drivers,
  laps,
  incidents,
  results
} from './schema';

export type Round = InferModel<typeof rounds, 'select'>;
export type Session = InferModel<typeof sessions, 'select'>;
export type Team = InferModel<typeof teams, 'select'>;
export type Driver = InferModel<typeof drivers, 'select'>;
export type Lap = InferModel<typeof laps, 'select'>;
export type Incident = InferModel<typeof incidents, 'select'>;
export type Results = InferModel<typeof results, 'select'>;
