import type { Logger } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/mysql2';

import mysql from 'mysql2/promise';
import { prettify } from 'sql-log-prettifier';

class PrettyLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    if (import.meta.env.PROD) return;

    console.log(`${prettify(query)}\nPARAMS: [${params}]\n`);
  }
}

const connection = await mysql.createConnection(import.meta.env.DATABASE_URL);

export const db = drizzle(connection, { logger: new PrettyLogger() });
