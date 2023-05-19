import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
});

const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;
