import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
  fileURL: { type: String, require: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  views: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
