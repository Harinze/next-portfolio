
import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
    index:true
  },
  email: {
    type: String,
    required: true, 
    index: true 
  },
  message: {
    type: String,
    required: true,
    index: true 
  },
});

export default mongoose.model("FormData", formDataSchema);