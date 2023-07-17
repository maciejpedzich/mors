import type { Config } from 'drizzle-kit';
import { config as loadEnv } from 'dotenv';

loadEnv();

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string
  }
} satisfies Config;
