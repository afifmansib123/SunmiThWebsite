import mongoose, { Connection } from "mongoose";
let catcheConnection: Connection | null = null;
const connect = async () => {
  if (catcheConnection) {
    console.log("using catched mongoose connect succefully");
    return catcheConnection;
  }

  try {
    const connect = await mongoose.connect(process.env.MONGO_URL as string);
    catcheConnection = connect.connection;
    console.log("new mongoose connect succefully");
    return catcheConnection;
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
