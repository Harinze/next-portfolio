import type { NextApiRequest, NextApiResponse } from 'next';
import {validateEmail} from '../../pages/api/helperFunctions';
import connectDB from "../../db/db";
import FormData from "../../model/formData";
connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'All fields are required!',
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email format. Please provide a valid email address.',
      });
    }

    try {

      const existingMessages = await FormData.find({ name, email, message });

      if (existingMessages.length > 0) {
        return res.status(400).json({
          message: 'You have already sent this message before.',
        });
      } else {
        
        const formData = new FormData({ name, email, message });
        await formData.save();

        return res.status(200).json({
          message: 'Your message has been sent successfully.',
          formData,
        });
      }
    } catch (error) {
      console.error('Error while saving to MongoDB:', error);
      return res.status(500).json({ message: 'An error occurred.' });
    }
  } else {
    res.status(405).end();
  }
};
