// import { MongoClient, Collection } from 'mongodb';
// import nodemailer from 'nodemailer';
// import "dotenv/config"

// const dbName = 'portfolio';
// const collectionName = 'formdatas';

// const connectToMongoDB = async(): Promise<Collection<any>>=> {
//   const client = new MongoClient(`${process.env.DB_CONNECTION}`);
//   await client.connect();
//   return client.db(dbName).collection(collectionName);
// }

// const sendEmail = async(data: any): Promise<void> =>{
//   const transporter = nodemailer.createTransport({
//     service: 'your-email-service',
//     auth: {
//       user: 'kingsleyibe66@gmail.com',
//       pass: "qfqxdflsgjhjzyki",
//     },
//   });

//   const mailOptions = {
//     from: 'kingsleyibe66@gmail.com',
//     to: 'kingsleyibe66@gmail.com',
//     subject: 'Data from MongoDB',
//     text: JSON.stringify(data),
//   };

//   await transporter.sendMail(mailOptions);
// }

// const  fetchDataFromMongoDB = async(): Promise<void> =>{
//   const collection = await connectToMongoDB();

//   // Replace this query with your actual MongoDB query
//   const data = await collection.find({},{projection:{_id:0, message:1,email:1,name:1}} ).toArray();

//   // Log or handle the retrieved data as needed
//   console.log('Data from MongoDB:', data);

//   // Send email with the retrieved data
//   await sendEmail(data);
// }

// // Interval Functionality
// const intervalInMinutes = 60; // Adjust the interval as needed (in minutes)
// setInterval(() => {
//   fetchDataFromMongoDB();
// }, intervalInMinutes * 1000); // Convert minutes to milliseconds


import { MongoClient, Collection } from 'mongodb';
import nodemailer from 'nodemailer';
import "dotenv/config";

const dbName = 'portfolio';
const collectionName = 'formdatas';

const connectToMongoDB = async (): Promise<Collection<any>> => {
  const client = new MongoClient(`${process.env.DB_CONNECTION}`);
  try {
    await client.connect();
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

const sendEmail = async (data: any): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "kingsleyibe66@gmail.com",
      pass:"qfqxdflsgjhjzyki",
    },
  });

  const mailOptions = {
    from: 'kingsleyibe66@gmail.com',
    to: 'kingsleyibe66@gmail.com',
    subject: 'Data from MongoDB',
    text: JSON.stringify(data),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
connectToMongoDB();
const fetchDataFromMongoDB = async (): Promise<void> => {
  try {
    const collection = await connectToMongoDB();
console.log('database is connected')
    // Replace this query with your actual MongoDB query
    const data = await collection.find({}, { projection: { _id: 0, message: 1, email: 1, name: 1 } }).toArray();

    // Log or handle the retrieved data as needed
    console.log('Data from MongoDB:', data);

    // Send email with the retrieved data
    await sendEmail(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    // You might want to handle or log the error appropriately
  }
};
fetchDataFromMongoDB();
// Interval Functionality
const intervalInMinutes = 60; // Adjust the interval as needed (in minutes)
setInterval(() => {
  fetchDataFromMongoDB();
}, intervalInMinutes * 1000); // Convert minutes to milliseconds

