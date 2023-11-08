import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CONNECTION}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;

