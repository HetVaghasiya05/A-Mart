const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendVerificationEmail } = require("../config/email");
require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create verification token
    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Create new user (not verified yet)
    user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await user.save();

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: "User registered. Check email to verify account." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyEmail = async (req, res) => {
    try {
      const { token } = req.params;
  
      // Decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Find user and verify
      let user = await User.findOne({ email: decoded.email });
      if (!user) return res.status(400).json({ message: "Invalid verification link" });
  
      user.isVerified = true;
      user.verificationToken = null;
      await user.save();
  
      res.status(200).json({ message: "Email verified! You can now log in." });
    } catch (error) {
      res.status(400).json({ message: "Invalid or expired token" });
    }
  };
  