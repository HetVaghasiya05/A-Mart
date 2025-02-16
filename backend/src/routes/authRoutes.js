const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendOtpSms } = require('../utils/infobipClient');
const router = express.Router();
// const nodemailer = require('nodemailer');
// const twilio = require('twilio');

// Load environment variables
require('dotenv').config();

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;





// Twilio Configuration
// const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
// const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });






// Generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

/**
 * User Registration API with OTP
 */
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ message: 'Email or Phone is required' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 min

    let user = new User({ name, email, phone, password: hashedPassword, otp, otpExpires });

    await user.save();

// Send OTP via SMS using Infobip
if (phone) {
    const message = `Your OTP code is ${otp}`;
    await sendOtpSms(phone, message);
  }

  res.status(200).json({ message: 'OTP sent! Verify to complete registration.' });
} catch (error) {
  res.status(500).json({ message: 'Error registering user', error });
}
});

/**
 * Verify OTP API
 */
router.post('/verify-otp', async (req, res) => {
    try {
      const { email, phone, otp } = req.body;
  
      let user = await User.findOne({ $or: [{ email }, { phone }] });
  
      if (!user) return res.status(400).json({ message: 'User not found' });
  
      if (user.otp !== otp || user.otpExpires < new Date()) {
        return res.status(400).json({ message: 'Invalid or expired OTP' });
      }
  
      user.isVerified = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();
  
      res.status(200).json({ message: 'User verified successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error verifying OTP', error });
    }
  });
  
/**
 * 📌 User Login API
 */
router.post('/login', async (req, res) => {
    try {
        const { email, phone, password } = req.body;

        let user = await User.findOne({ $or: [{ email }, { phone }] });

        if (!user) return res.status(400).json({ message: 'User not found' });

        if (!user.isVerified) return res.status(400).json({ message: 'Please verify your account' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

/**
 * 📌 Get User Details API (Protected Route)
 */
router.get('/user', async (req, res) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching user details', error });
    }
});

module.exports = router;
