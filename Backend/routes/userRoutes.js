const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// --- REGISTRATION ROUTE ---
router.post('/register', async (req, res) => {
  try {
    // Destructure all fields from the frontend
    const { 
      name, contact, email, password, preferredLanguage, 
      chainOfCommand, acknowledgeTerms, sector, nature, 
      armsLicense, role, address 
    } = req.body;

    const newUser = new User({
      name, contact, email, password, preferredLanguage,
      chainOfCommand, acknowledgeTerms, sector, nature,
      armsLicense, role, address
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "User Registered Successfully!" });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(400).json({ success: false, error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Authorized Access Request for:", email);

    // 1. Find user and validate existence
    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      console.log("Access Denied: Identifier not found.");
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    // 2. Compare Hashed Password
    const isMatch = await user.matchPassword(password);
    console.log("Credential Verification:", isMatch ? "SUCCESS" : "FAILED");

    if (isMatch) {
      // 3. Generate JWT Token (Uses your secret from .env)
      const token = jwt.sign(
        { id: user._id, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: '24h' }
      );

      // 4. Set HttpOnly Cookie
      res.cookie('token', token, {
      httpOnly: true,
      secure: false, // Must be FALSE while testing on localhost (HTTP)
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

      // 5. Respond to Frontend (Send user info, but NO token in JSON)
      res.json({
        success: true,
        message: "Authorized Access.",
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
          email: user.email
        }
      });
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.error("Critical System Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;