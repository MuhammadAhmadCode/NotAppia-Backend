const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registration Logic Controller
async function registerUser(req, res) {
  try {
    const { fullName, email, password } = req.body;

    // check if user already exists
    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const hashed = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullName,
      email,
      password: hashed,
    });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      partitioned: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User Registered Successfully!",
      fullName: user.fullName,
      token,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to register user",
      error: err.message,
    });
  }
}

// Login Logic Controller

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      partitioned: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "user logged in successfully!",
      id: user._id,
      email: user.email,
      token,
      fullName: user.fullName,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to log in",
      error: err.message,
    });
  }
}

function logOut(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "User Logged Out Successfully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to log out",
      error: err.message,
    });
  }
}

function me(req, res) {
  try {
    res.json(req.user);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user data",
      error: err.message,
    });
  }
}

module.exports = { registerUser, loginUser, logOut, me };
