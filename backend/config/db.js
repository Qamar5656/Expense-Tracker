import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("www.localhost//:127.0.0.1/mongodb");
    console.log("Connection Successful for database");
  } catch (err) {
    console.log("Connection not Successful for database", err);
  }
};
