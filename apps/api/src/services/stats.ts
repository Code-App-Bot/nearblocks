import { Request, Response } from 'express';

import db from '#libs/db';
import { cache } from '#libs/redis';
import catchAsync from '#libs/async';

const EXPIRY = 15; // 15 sec

const latest = catchAsync(async (_req: Request, res: Response) => {
  const stats = await cache(
    'stats:latest',
    async () => {
      try {
        const { rows } = await db.query(
          `
            SELECT
              block,
              gas_price,
              avg_block_time,
              nodes,
              nodes_online,
              near_price,
              near_btc_price,
              market_cap,
              volume,
              high_24h,
              high_all,
              low_24h,
              low_all,
              change_24,
              total_supply,
              total_txns
            FROM 
              stats
            LIMIT 1
          `,
        );

        return rows;
      } catch (error) {
        return null;
      }
    },
    { EX: EXPIRY },
  );

  return res.status(200).json({ stats });
});

export default { latest };
