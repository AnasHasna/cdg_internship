const express = require("express");
const {
  registerUser,
  authUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/userController");
const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/auth", authUser);
userRoutes.route("/forgetpassword").post(forgetPassword).put(resetPassword);

module.exports = userRoutes;
