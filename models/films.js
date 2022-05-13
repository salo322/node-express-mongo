const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      link: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
