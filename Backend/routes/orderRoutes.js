const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// --- 1. GET ALL ORDERS (For EmployeePanel) ---
router.get('/', async (req, res) => {
  try {
    // Sort by newest first
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch logistics data", error: error.message });
  }
});

// --- 2. GET ORDERS BY USER ID (For Profile History) ---
router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user history", error: error.message });
  }
});

// --- 3. CREATE ORDER (Existing) ---
router.post('/', async (req, res) => {
  try {
    const { userId, paymentId, products, totalAmount } = req.body;
    const newOrder = new Order({
      userId,
      paymentId,
      products,
      totalAmount
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Order Logging Failed", error: error.message });
  }
});

// --- 4. UPDATE ORDER STATUS (Existing) ---
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;