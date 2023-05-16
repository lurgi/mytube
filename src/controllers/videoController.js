import User from "../models/User";
import Video from "../models/Video";

export const getVideoUpload = (req, res) => {
  return res.render("videos/upload", { pageTitle: "Video Upload" });
};
export const postVideoUpload = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    title,
    description,
    fileURL: path,
    owner: _id,
  });
  const user = await User.findById(_id);
  user.videos.push(newVideo._id);
  await user.save();
  return res.redirect("/");
};
export const videoWatch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.redirect("/");
  }
  return res.render("videos/watch", { pageTitle: video.title, video });
};
export const getVideoEdit = async (req, res) => {
  const {
    params: { id },
    session: {
      user: { _id },
    },
  } = req;
  const video = await Video.findById(id);
  if (video.owner + "" !== _id + "" || !video) {
    return res.redirect("/");
  }
  return res.render("videos/edit", { pageTitle: "Video Edit", video });
};
export const postVideoEdit = async (req, res) => {
  const {
    body: { title, description },
    params: { id },
    session: { _id },
  } = req;
  const video = await Video.findById(id);
  if (video.owner + "" !== _id + "") {
    return res.redirect("/");
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
  });
  return res.redirect(`/videos/${id}`);
};
export const videoDelete = async (req, res) => {
  const {
    params: { id },
    session: {
      user: { _id },
    },
  } = req;
  const video = await Video.findById(id);
  if (video.owner + "" === _id + "") {
    await Video.findByIdAndDelete(id);
  }
  return res.redirect("/");
};
