const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {

    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: "FAILED_TO_FETCH_ORDERS",
      error: error.message
    });

  }
});


// CREATE ORDER
router.post("/", async (req, res) => {
  try {

    const { userId, paymentId, products, totalAmount } = req.body;

    const newOrder = new Order({
      userId,
      paymentId,
      products,
      totalAmount,
      status: "Pending"
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);

  } catch (error) {

    res.status(500).json({
      message: "ORDER_SAVE_FAILED",
      error: error.message
    });

  }
});


router.get("/user/:userId", async (req, res) => {
  try {

    const orders = await Order.find({
      userId: req.params.userId
    });

    res.json(orders);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "ORDER_FETCH_FAILURE" });
  }
});


module.exports = router;