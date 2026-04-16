const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/product');

// @route   GET /api/admin/stats
// @desc    Get dashboard summary stats
router.get('/stats', async (req, res) => {
    try {
        const [totalUsers, totalProducts, totalOrders, allOrders] = await Promise.all([
            User.countDocuments(),
            Product.countDocuments(),
            Order.countDocuments(),
            Order.find({})
        ]);

        // Calculate total revenue from all orders
        const revenue = allOrders.reduce((acc, order) => acc + (order.totalAmount || 0), 0);

        res.json({
            totalUsers,
            totalProducts,
            totalOrders,
            revenue
        });
    } catch (error) {
        res.status(500).json({ message: "ADMIN_STATS_FAILURE", error: error.message });
    }
});

// @route   GET /api/admin/transactions
// @desc    Get latest 10 transactions with populated user names
router.get('/transactions', async (req, res) => {
    try {
        // We use .populate to get the 'name' from the User model linked via userId
        const orders = await Order.find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .populate('userId', 'name');

        const formattedTransactions = orders.map(order => ({
            id: order._id.toString().slice(-6).toUpperCase(),
            userName: order.userId ? order.userId.name : "Unknown Agent",
            productName: order.products?.length > 0 ? "Tactical Requisition" : "Service Asset",
            status: order.status || "Deployed",
            amount: order.totalAmount
        }));

        res.json(formattedTransactions);
    } catch (error) {
        res.status(500).json({ message: "TRANSACTION_FETCH_FAILURE", error: error.message });
    }
});

module.exports = router;