export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const search = (req, res) => {
  return res.send("<h1>search</h1>");
};
