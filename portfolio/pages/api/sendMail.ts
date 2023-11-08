import type { NextApiRequest, NextApiResponse } from 'next';
import '../api/sendDataByEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).end();
};
