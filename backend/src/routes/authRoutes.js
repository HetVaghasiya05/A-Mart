const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * @route   POST /auth/register
 * @desc    User Registration
 * @access  Public
 */
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if user already exists
    let existingUser = await User.findOne({ $or: [{ email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered. Please login." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    let user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(200).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

/**
 * @route   POST /auth/login
 * @desc    User Login
 * @access  Public
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ $or: [{ email }] });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

/**
 * @route   GET /auth/user
 * @desc    Get Logged-in User Details (Protected Route)
 * @access  Private
 */
router.get("/user", async (req, res) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error in /user:", error);
    res.status(500).json({ message: "Error fetching user details", error: error.message });
  }
});

/**
 * @route   GET /auth/test
 * @desc    Test API
 * @access  Public
 */
router.get("/test", (req, res) => {
  res.json({ message: "Auth API is working!" });
});


router.get("/api/user", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password"); // Exclude password
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
