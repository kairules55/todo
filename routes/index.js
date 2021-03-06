const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController");
const homeController = new HomeController();

router.get("/", homeController.home);
router.post("/createTask", homeController.createTask);
router.get("/deleteTask", homeController.deleteTask);

module.exports = router;
