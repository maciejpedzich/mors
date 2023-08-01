import { defineMiddleware } from 'astro/middleware';

import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { rounds } from '@/db/schema';

export const onRequest = defineMiddleware(
  async ({ params, locals, redirect }, next) => {
    const { roundId } = params;

    if (roundId) {
      const [foundRound] = await db
        .select({ name: rounds.name })
        .from(rounds)
        .where(eq(rounds.id, Number(roundId)));

      if (foundRound) {
        locals.roundName = foundRound.name;
        return next();
      } else {
        return redirect('/404');
      }
    } else {
      return next();
    }
  }
);
