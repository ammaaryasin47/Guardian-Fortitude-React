const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { protect } = require('../middleware/authmiddleware');

// --- 1. REGISTRATION ---
router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ success: true, message: "User Registered Successfully!" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// --- 2. LOGIN ---
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });

      res.cookie('token', token, {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({ success: true, user: { id: user._id, name: user.name, role: user.role, email: user.email } });
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// --- 3. GET PROFILE ---
router.get('/profile', protect, async (req, res) => {
  console.log(`🛡️  INCOMING_REQUEST: Fetching profile for UID: ${req.user._id}`);
  
  const user = await User.findById(req.user._id);
  if (user) {
    // FORCE NO-CACHE to prevent the 304 blank input issue
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// --- 4. UPDATE PROFILE ---
router.put('/profile', protect, async (req, res) => {
  console.log("🛠️  UPDATE_INITIATED:", req.body);

  const user = await User.findById(req.user._id);

  if (user) {
    // Verify Current Password
    const isMatch = await user.matchPassword(req.body.prevPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'INVALID_VERIFICATION_KEY' });
    }

    // Explicit field mapping
    const fields = ['name', 'email', 'contact', 'sector', 'nature', 'address', 'armsLicense', 'preferredLanguage', 'chainOfCommand'];
    fields.forEach(field => {
      if (req.body[field] !== undefined) {
        user[field] = req.body[field];
      }
    });

    if (req.body.newPassword) {
      user.password = req.body.newPassword;
    }

    const updatedUser = await user.save();
    console.log("✅ UPDATE_SUCCESSFUL:", updatedUser.name);
    
    // Return the updated doc
    res.status(201).json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;