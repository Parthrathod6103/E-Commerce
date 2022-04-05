const express = require("express");
const router = express.Router();
const { registerUesr, loginUser } = require("../controllers/userController");

router.route("/register").post(registerUesr);
router.route("/login").post(loginUser);

module.exports = router;
