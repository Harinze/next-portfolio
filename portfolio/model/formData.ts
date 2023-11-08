
import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Make the 'name' field required
  },
  email: {
    type: String,
    required: true, // Make the 'email' field required
  },
  message: {
    type: String,
    required: true, // Make the 'message' field required
  },
});

export default mongoose.model("FormData", formDataSchema);