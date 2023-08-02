import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost/taskApp");
    console.log("MongoDB connected to " + conn.connection.name);
  } catch {
    console.error("Mongo Error");
    process.exit(1);
  }
};

export { connectDB };
