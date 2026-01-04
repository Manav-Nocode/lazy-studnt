import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
});
export const userModel = mongoose.model("user", userSchema);
