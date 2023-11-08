
// import type { NextApiRequest, NextApiResponse } from 'next'
// import mongoose from 'mongoose';
// import cron from 'node-cron';
// import emailjs from 'emailjs-com';
// import FormData from '../../model/formData';
// import connectDB from '../../db/db';
// import { Document } from 'mongoose';
// import "dotenv/config"

// interface IFormDataDocument extends Document {
//   name: string;
//   email: string;
//   message: string;
// }

// export default async (req:NextApiRequest, res:NextApiResponse) => {
//   try {
//     // Initialize the MongoDB connection
//     connectDB();

//     // Define a function to send the email
//     const sendEmail = async () => {
//       try {
//         const data: IFormDataDocument[] = await FormData.find({}).exec();
//         console.log("data",data)
//         const emailContent = `Here's all the data from the database:\n\n${JSON.stringify(data, null, 2)}`;

//         const emailParams = {
//           from: process.env.EMAIL,
//           to: process.env.EMAIL,
//           subject: 'All Database Data',
//           text: emailContent,
//         };

//         const emailResponse = await emailjs.send(
//           process.env.SERVICE_ID as string,
//           process.env.TEMPLATE as string,
//           emailParams,
//           process.env.emailjsUser as string
//         );

//         console.log('Email sent successfully:', emailResponse);
//       } catch (error) {
//         console.error('An error occurred:', error);
//       } finally {
//         mongoose.connection.close();
//       }
//     };

//     // Use a cron job to schedule the task
//     // cron.schedule('0 9 * * *', () => {
//     //   sendEmail();
//     // });
//     cron.schedule('* * * * *', () => {
//       sendEmail();
//    });

//     // Respond with an HTTP 200 status
//     res.status(200).end();
//   } catch (error) {
//     console.error('An error occurred during request handling:', error);
//     res.status(500).end();
//   }
// };

import mongoose from 'mongoose';
import cron from 'node-cron';
import emailjs from 'emailjs-com';
import FormData from '../../model/formData'; // Adjust the path to your model
import connectDB from '../../db/db';
import dotenv from 'dotenv';

dotenv.config();

// interface IFormDataDocument extends Document {
//   name: string;
//   email: string;
//   message: string;
// }

const sendEmail = async () => {
  try {
    await connectDB();
    const data:any = await FormData.find({}).exec();

    const emailContent = `Here's all the data from the database:\n\n${JSON.stringify(data, null, 2)}`;

    const emailParams = {
      from: process.env.EMAIL as string,
      to: process.env.EMAIL as string,
      subject: 'All Database Data',
      text: emailContent,
    };

    const emailResponse = await emailjs.send(
      process.env.SERVICE_ID as string,
      process.env.TEMPLATE as string,
      emailParams,
      process.env.emailjsUser as string
    );

    console.log('Email sent successfully:', emailResponse);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Schedule the cron job to run the email sending process
cron.schedule('* * * * *', () => {
  sendEmail();
});
