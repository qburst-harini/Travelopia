import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectMongoose = mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@travelopia-cluster.wen2mun.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default connectMongoose;
