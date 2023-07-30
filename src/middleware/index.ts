import { defineMiddleware } from 'astro/middleware';

import { eq, sql } from 'drizzle-orm';
import { db } from '@/db';
import { rounds } from '@/db/schema';

export const onRequest = defineMiddleware(
  async ({ locals, params, redirect }, next) => {
    const { roundId } = params;

    if (!roundId) return next();

    const [round] = await db
      .select({ name: rounds.name })
      .from(rounds)
      .where(eq(rounds.id, Number(roundId)));

    if (round) {
      locals.roundName = round.name as string;
      return next();
    } else {
      return redirect('/404');
    }
  }
);
