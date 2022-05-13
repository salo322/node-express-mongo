const Film = require("../models/films");

const film_create = (req, res) => {
   res.render("addFilm", {
      title: "Create new film",
   });
};

const film_create_post = (req, res) => {
   const film = new Film(req.body);
   film
      .save()
      .then((result) => {
         res.redirect("/allfilms");
      })
      .catch((err) => {
         console.log(err);
      });
};
const film_home = (req, res) => {
   Film.find()
      .sort({ createdAt: -1 })
      .then((result) => {
         res.render("allfilms", {
            title: "all-films",
            blogs: result.map((result) => result.toJSON()),
         });
      })
      .catch((err) => {
         console.log(err);
      });
};
module.exports = {
   film_create,
   film_create_post,
   film_home,
};
