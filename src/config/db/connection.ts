import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected to " + conn.connection.name);
  } catch {
    console.error("Mongo Error");
    process.exit(1);
  }
};

export { connectDB };
