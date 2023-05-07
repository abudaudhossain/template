const express = require('express');
const router = express.Router();
const welcome = require('../app/controllers/welcome')

// middleware
const firstAuth = require("../app/middleware/firstAuth")

router.get('/', welcome.welcome)


module.exports = router;