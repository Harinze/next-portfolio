import type { NextApiRequest, NextApiResponse } from 'next';
import {validateEmail} from '../../pages/api/helperFunctions';
import connectDB from "../../db/db";
import FormData from "../../model/formData";
connectDB();

export default async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "Name is a required field.",
      });
    };

    if (!email) {
      return res.status(400).json({
        message: "Email is a required field.",
      });
    }

    if (!message) {
      return res.status(400).json({
        message: "Message is a required field.",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid email format. Please provide a valid email address.",
      });
    }

    try {
      const existingEntry = await FormData.find({ name, message });

      if (existingEntry.length > 0 ) {
        return res.status(400).json({
          message: "You have already sent this message before.",
        });
      }

      const formData = new FormData({
         name,
         email,
          message 
        });
        
      await formData.save();

      return res.status(200).json({
        message: "Your message has been sent successfully.",
        formData,
      });
    } catch (error) {
      console.error("Error while saving to MongoDB: ", error);
      return res.status(500).json({ message: "An error occurred." });
    }
  }

  res.status(405).end();
};


