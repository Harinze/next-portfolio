import type { NextApiRequest, NextApiResponse } from 'next';
import { validateEmail } from './helperFunctions';
import connectDB from '../../db/db';
import FormData from '../../model/formData';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name && !email && !message) {
      return res.status(400).json({
        message: 'All fields are required!',
      });
    }

    if (!name) {
      return res.status(400).json({
        message: 'Name field is required!',
      });
    }

    if (!email) {
      return res.status(400).json({
        message: 'Email field is required!',
      });
    }

    if (!message) {
      return res.status(400).json({
        message: 'Message field is required!',
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email format. Please provide a valid email address.',
      });
    }

    try {
      const existingMessages = await FormData.find({ email, message }).maxTimeMS(60000);

      if (existingMessages.length !== 0) {
        return res.status(400).json({
          message: 'You have already sent this message',
        });
      } 
        const formData = new FormData({ name, email, message });
        await formData.save();

        return res.status(200).json({
          message: 'Your message has been sent successfully!',
          formData,
        });
    
    } catch (error:any) {
      console.error('Error:', error.message);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.status(405).end();
  }
};











