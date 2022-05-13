const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
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
   },
   { timestamps: true }
);

const Blog = mongoose.model("Film", blogSchema);

module.exports = Blog;
