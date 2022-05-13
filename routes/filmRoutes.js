const express = require("express");
const blogController = require("../controllers/filmController");
const router = express.Router();

router.post("/allfilms", blogController.film_create_post);
router.get("/allblogs", blogController.film_home);
router.get("/create", blogController.film_create);
