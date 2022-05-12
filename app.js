const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const blogRoutes = require("./routes/blogRoutes");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT);
//connect to mongoDB
const dbURI =
   "mongodb+srv://salome777:Mongo73738@cluster0.r7sa4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((result) => console.log(result))
   .catch((err) => console.log(err));

//set engine
app.engine(
   "handlebars",
   exphbs({
      defaultLayout: "main",
      layoutsDir: path.join(__dirname, "views/layouts"),
   })
);
app.set("view engine", "handlebars");

//home routes
app.get("/", function (req, res) {
   res.redirect("/blogs");
});

app.get("/about", function (req, res) {
   res.render("about");
});
//blog routes
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
   res.status(404).render("404", { title: "404" });
});
