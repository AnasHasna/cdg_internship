const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");

/**
 * @desc    register user & token
 * @route   POST /api/users/register
 * @access  Public
 */

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, role, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    fullName,
    email,
    role,
    password,
  });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/**
 * @desc auth user & token
 * @route POST api/users/login
 * @access Public
 */

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

/**
 * @desc    forget password
 * @route   POST /api/users/forgetpassword
 * @access  Public
 */
const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const verifyCode = Math.floor(Math.random() * 1000000 + 1);
    sendEmail(verifyCode, user.email);
    await User.findByIdAndUpdate(user._id, { verifyCode });
    res.status(200).json({
      status: "success",
      message: "Email sent",
    });
  } else {
    res.status(400).json({
      status: "fail",
      message: "User not found",
    });

    throw new Error("User not found");
  }
});

/**
 * @desc    reset password
 * @route   PUT /api/users/resetpassword
 * @access  Public
 */
const resetPassword = asyncHandler(async (req, res) => {
  const { verifyCode, password } = req.body;
  const user = await User.findOne({ verifyCode });
  if (!user) {
    res.status(400).json({
      status: "fail",
      message: "Invalid code",
    });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.findOneAndUpdate(
      { verifyCode },
      { $set: { password: hashedPassword } }
    );
    res.status(200).json({
      status: "success",
      message: "Password updated",
    });
  }
});

module.exports = { registerUser, authUser, forgetPassword, resetPassword };
