const express = require('express')

const LoginUser  = require('../controllers/login.controller')

const router = express.Router();

router.post("/login",LoginUser);

module.exports = router;