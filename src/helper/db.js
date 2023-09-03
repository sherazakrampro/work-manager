import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("DB Connnected...");
    console.log("Host:", connection.host);
  } catch (error) {
    console.log("Failed to connect with Database");
    console.log(error);
  }
};

export default dbConnect;
