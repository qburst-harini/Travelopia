import mongoose from "mongoose";

const schemaObj = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    city: { type: String },
    travelNumbers: { type: Number },
    dollars: { type: Number },
  },
  { versionKey: false }
);
const UserModel = mongoose.model('users', schemaObj);

export default UserModel;
