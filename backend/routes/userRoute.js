const express = require("express");
const { registerUesr } = require("../controllers/userController");

const router = express.Router;

router.route("/register").post(registerUesr);

module.exports = router;
