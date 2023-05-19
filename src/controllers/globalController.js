import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({})
    .sort({ createdAt: "desc" })
    .populate("owner");
  if (!videos) {
    return res.send("server-error");
  }
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = async (req, res) => {
  const { keyword } = req.body;
  if (keyword) {
    const videos = await Video.find({
      title: {
        $regex: new RegExp(`${keyword}`, "i"),
      },
    })
      .sort({ createdAt: "desc" })
      .populate("owner");
    return res.render("search", { pageTitle: "Search", videos });
  }
  return res.render("search", { pageTitle: "Search" });
};
