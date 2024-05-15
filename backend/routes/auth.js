//internal module
const express = require("express");
const router = express.Router();
//internal module
const authController = require("../controller/auth.controller");

//register a new user
router.post("/sign_up", authController.sign_up);

// login
router.post("/login", authController.login);

module.exports = router;
