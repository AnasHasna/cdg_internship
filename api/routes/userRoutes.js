const express = require("express");
const {
  registerUser,
  authUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");
const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/auth", authUser);
userRoutes.route("/forgetpassword").post(forgetPassword).put(resetPassword);
userRoutes.get("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome to the CDG API");
});

module.exports = userRoutes;
