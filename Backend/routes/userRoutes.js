const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/product');
const Order = require('../models/Order');
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
  const user = await User.findById(req.user._id);
  if (user) {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// --- 4. UPDATE PROFILE ---
router.put('/profile', protect, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    const isMatch = await user.matchPassword(req.body.prevPassword);
    if (!isMatch) return res.status(401).json({ message: 'INVALID_VERIFICATION_KEY' });

    const fields = ['name', 'email', 'contact', 'sector', 'nature', 'address', 'armsLicense', 'preferredLanguage', 'chainOfCommand'];
    fields.forEach(field => {
      if (req.body[field] !== undefined) user[field] = req.body[field];
    });

    if (req.body.newPassword) user.password = req.body.newPassword;

    const updatedUser = await user.save();
    res.status(201).json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// --- 5. ADMIN STATS (MAPPED TO FRONTEND KEYS) ---
router.get('/admin/stats', async (req, res) => {
  try {
    const [userCount, productCount, orderCount, revenueData] = await Promise.all([
      User.countDocuments(),
      Product.countDocuments(),
      Order.countDocuments(),
      Order.aggregate([{ $group: { _id: null, total: { $sum: "$totalAmount" } } }])
    ]);

    // KEY FIX: Returning 'totalProducts' and 'totalUsers' to match AdminPanel.jsx
    res.json({
      success: true,
      totalUsers: userCount,
      totalProducts: productCount,
      totalOrders: orderCount,
      revenue: revenueData[0]?.total || 0
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// --- 6. USER INTEL (GET ALL PERSONNEL) ---
router.get('/', async (req, res) => {
  try {
    // This feeds the User Intel table
    const users = await User.find({}).select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching personnel" });
  }
});

// --- 7. CHECKOUT & ORDERS ---
router.post('/checkout', async (req, res) => {
  try {
    const { userId, paymentId, cartItems } = req.body;
    const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const formattedProducts = cartItems.map(item => ({
      productId: item._id,
      quantity: item.quantity,
      priceAtPurchase: item.price
    }));

    const newOrder = new Order({
      userId,
      paymentId,
      products: formattedProducts,
      totalAmount,
      status: 'Deployed'
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, orderId: savedOrder._id });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;