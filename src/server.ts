import app from "./app";
import mongoose from "mongoose";

const port = process.env.port;
const dbURL = process.env.dbURL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbURL || "");
    //checking dbURL used
    console.log("Connection will be made using DB URL:", dbURL);
    //verying connection status to mongoDB
    console.log(`MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

connectDB();

app.listen(port, () => {
  console.log("The server is running on localhost:", port);
});

export default connectDB;
