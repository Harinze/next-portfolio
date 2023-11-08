// pages/api/sendDataEmail.js
import type { NextApiRequest, NextApiResponse } from 'next';
import '../api/sendDataByEmail'; // Import the sendEmail script

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // This function is empty because the scheduling and email sending logic is handled by the cron job.
  res.status(200).end();
};
