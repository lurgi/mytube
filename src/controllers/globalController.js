import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({})
    .sort({ createdAt: "desc" })
    .populate("owner");
  if (!videos) {
    return res.sned("server-error");
  }
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  return res.send("<h1>search</h1>");
};
