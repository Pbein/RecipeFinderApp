// Importing required dependencies and model
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Utility function to generate a JWT token for the user
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Controller to handle new user registration
exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user with the provided email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Create a new user in the database
  const user = await User.create({
    username,
    email,
    password,
  });

  // If user is successfully created, return its data
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Controller to handle user login
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email in the database
  const user = await User.findOne({ email });

  // If user is found and password matches, return its data
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
