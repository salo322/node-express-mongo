const express = require("express");
const blogController = require("../controllers/filmController");
const router = express.Router();

router.post("/", blogController.film_create_post);
router.get("/", blogController.film_home);
router.get("/createfilms", blogController.film_create);
