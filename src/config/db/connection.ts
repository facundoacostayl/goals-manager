import mongoose from "mongoose";
import { MONGODB_URI } from "./env";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected to " + conn.connection.name);
  } catch (error) {
    error instanceof Error && console.error(error.message);
    process.exit(1);
  }
};

export { connectDB };
