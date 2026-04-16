const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const askAI = require("../models/aiService");

router.post("/ai-recommend", async (req, res) => {
  try {

    const query = req.body.query?.trim();

    console.log("AI QUERY:", query);

    if (!query) {
      return res.json({ reply: "Please enter something.", products: [] });
    }

    const words = query.split(" ");

    let products = await Product.find({
      $or: [
        { name: { $regex: words.join("|"), $options: "i" } },
        { description: { $regex: words.join("|"), $options: "i" } },
        { category: { $regex: words.join("|"), $options: "i" } }
      ]
    }).limit(5);

    console.log("Products found:", products.length);

    const aiReply = await askAI(query, products);

    res.json({
      reply: aiReply,
      products
    });

  } catch (err) {
    console.error("AI error:", err);
    res.status(500).json({ error: "AI server error." });
  }
});

module.exports = router;