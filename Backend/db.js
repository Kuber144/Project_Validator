import { connect } from "mongoose";
const mongoURI =
  "mongodb+srv://kuberjain144:RmXWbkHtlSArsSdQ@cluster0.hrs2sjp.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await connect(mongoURI);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
