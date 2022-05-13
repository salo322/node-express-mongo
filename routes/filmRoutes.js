const express = require("express");
const filmController = require("../controllers/filmController");
const router = express.Router();

router.post("/allfilms", filmController.film_create_post);
router.get("/allfilms", filmController.film_home);
router.get("/createfilms", filmController.film_create);
