import { relations } from 'drizzle-orm';

import {
  smallint,
  mediumint,
  char,
  varchar,
  boolean,
  datetime,
  mysqlEnum,
  mysqlTable
} from 'drizzle-orm/mysql-core';

export const rounds = mysqlTable('rounds', {
  id: smallint('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 15 }),
  countryCode: varchar('country_code', { length: 5 })
});

export const sessions = mysqlTable('sessions', {
  id: smallint('id').primaryKey().autoincrement(),
  roundId: smallint('round_id'),
  type: mysqlEnum('type', ['p', 'q', 'r']),
  dateStarted: datetime('date_started'),
  dateFinished: datetime('date_finished')
});

export const teams = mysqlTable('teams', {
  id: smallint('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 20 })
});

export const drivers = mysqlTable('drivers', {
  id: smallint('id').primaryKey().autoincrement(),
  teamId: smallint('team_id'),
  firstName: varchar('first_name', { length: 10 }),
  lastName: varchar('last_name', { length: 10 }),
  countryCode: char('country_code', { length: 2 }),
  human: boolean('human')
});

export const laps = mysqlTable('laps', {
  id: smallint('id').primaryKey().autoincrement(),
  driverId: smallint('driver_id'),
  sessionId: smallint('session_id'),
  lapNumber: smallint('lap_number'),
  tyreCompound: mysqlEnum('tyre_compound', ['s', 'm', 'h', 'i', 'w']),
  sector1TimeMs: mediumint('sector1_time_ms'),
  sector2TimeMs: mediumint('sector2_time_ms'),
  sector3TimeMs: mediumint('sector3_time_ms'),
  totalTimeMs: mediumint('total_time_ms'),
  valid: boolean('valid')
});

export const incidents = mysqlTable('incidents', {
  id: smallint('id').primaryKey().autoincrement(),
  sessionId: smallint('session_id'),
  driverId: smallint('driver_id'),
  dateNoted: datetime('date_noted'),
  lapNumber: smallint('lap_number'),
  infringement: smallint('infringement'),
  penalty: smallint('penalty')
});

export const results = mysqlTable('results', {
  id: smallint('id').primaryKey().autoincrement(),
  sessionId: smallint('session_id'),
  driverId: smallint('driver_id'),
  status: mysqlEnum('status', ['fin', 'dnf', 'dsq', 'ret']),
  position: smallint('position'),
  points: smallint('points'),
  penaltiesSeconds: smallint('penalties_seconds')
});

// export const roundsRelations = relations(rounds, ({ many }) => ({
//   sessions: many(sessions)
// }));

// export const sessionsRelations = relations(sessions, ({ one, many }) => ({
//   round: one(rounds, {
//     fields: [sessions.roundId],
//     references: [rounds.id]
//   }),
//   laps: many(laps),
//   incidents: many(incidents),
//   results: many(results)
// }));

// export const teamsRelations = relations(teams, ({ many }) => ({
//   drivers: many(drivers)
// }));

// export const driversRelations = relations(drivers, ({ one, many }) => ({
//   team: one(teams, {
//     fields: [drivers.teamId],
//     references: [teams.id]
//   }),
//   laps: many(laps),
//   incidents: many(incidents),
//   results: many(results)
// }));

// export const lapsRelations = relations(laps, ({ one }) => ({
//   session: one(sessions, {
//     fields: [laps.sessionId],
//     references: [sessions.id]
//   }),
//   driver: one(drivers, {
//     fields: [laps.driverId],
//     references: [drivers.id]
//   })
// }));

// export const incidentRelations = relations(incidents, ({ one }) => ({
//   session: one(sessions, {
//     fields: [incidents.sessionId],
//     references: [sessions.id]
//   }),
//   driver: one(drivers, {
//     fields: [incidents.driverId],
//     references: [drivers.id]
//   })
// }));

// export const resultsRelations = relations(results, ({ one }) => ({
//   session: one(sessions, {
//     fields: [results.sessionId],
//     references: [sessions.id]
//   }),
//   driver: one(drivers, {
//     fields: [results.driverId],
//     references: [drivers.id]
//   })
// }));
