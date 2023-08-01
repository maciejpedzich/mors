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
  id: smallint('id').primaryKey().autoincrement().notNull(),
  name: varchar('name', { length: 15 }).notNull(),
  countryCode: varchar('country_code', { length: 5 }).notNull()
});

export const sessions = mysqlTable('sessions', {
  id: smallint('id').primaryKey().autoincrement().notNull(),
  roundId: smallint('round_id').notNull(),
  type: mysqlEnum('type', ['p', 'q', 'r']).notNull(),
  dateStarted: datetime('date_started').notNull(),
  dateFinished: datetime('date_finished').notNull()
});

export const teams = mysqlTable('teams', {
  id: smallint('id').primaryKey().autoincrement().notNull(),
  name: varchar('name', { length: 20 }).notNull()
});

export const drivers = mysqlTable('drivers', {
  id: smallint('id').primaryKey().autoincrement().notNull(),
  teamId: smallint('team_id').notNull(),
  firstName: varchar('first_name', { length: 10 }).notNull(),
  lastName: varchar('last_name', { length: 10 }).notNull(),
  countryCode: char('country_code', { length: 2 }).notNull(),
  human: boolean('human').notNull()
});

export const laps = mysqlTable('laps', {
  id: smallint('id').primaryKey().autoincrement().notNull(),
  driverId: smallint('driver_id').notNull(),
  sessionId: smallint('session_id').notNull(),
  lapNumber: smallint('lap_number').notNull(),
  tyreCompound: mysqlEnum('tyre_compound', ['s', 'm', 'h', 'i', 'w']).notNull(),
  sector1TimeMs: mediumint('sector1_time_ms').notNull(),
  sector2TimeMs: mediumint('sector2_time_ms').notNull(),
  sector3TimeMs: mediumint('sector3_time_ms').notNull(),
  totalTimeMs: mediumint('total_time_ms').notNull(),
  valid: boolean('valid').notNull()
});

export const incidents = mysqlTable('incidents', {
  id: smallint('id').primaryKey().autoincrement().notNull(),
  sessionId: smallint('session_id').notNull(),
  driverId: smallint('driver_id').notNull(),
  dateNoted: datetime('date_noted').notNull(),
  lapNumber: smallint('lap_number').notNull(),
  infringement: smallint('infringement').notNull(),
  penalty: smallint('penalty').notNull()
});

export const results = mysqlTable('results', {
  id: smallint('id').primaryKey().autoincrement().notNull(),
  sessionId: smallint('session_id').notNull(),
  driverId: smallint('driver_id').notNull(),
  status: mysqlEnum('status', ['fin', 'dnf', 'dsq', 'ret']).notNull(),
  position: smallint('position').notNull(),
  points: smallint('points').notNull(),
  penaltiesSeconds: smallint('penalties_seconds').notNull()
});
