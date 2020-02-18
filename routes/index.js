const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const homeController = new HomeController();

router.get('/',homeController.home);

module.exports = router;