const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dns = require('node:dns/promises');
require('dotenv').config();
const aiRoutes = require("./routes/ai");
const askAI = require("./models/aiService");

// --- 1. DNS & NETWORK CONFIG ---
dns.setServers(['1.1.1.1', '8.8.8.8']);

// --- 2. INITIALIZE APP ---
const app = express();

// --- 3. GLOBAL MIDDLEWARE ---
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// --- 4. DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🚀 [SYSTEM]: MongoDB Atlas Connected via Mongoose"))
  .catch(err => console.error("❌ [ERROR]: Database Connection Failure: ", err));

// --- 5. ROUTE IMPORTS ---
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

// --- 6. ROUTE DEFINITIONS ---
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use("/", aiRoutes);

// ===============================
// 🤖 AI PRODUCT ASSISTANT ROUTE
// ===============================
app.post("/api/ai-recommend", async (req, res) => {
  try {

    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const aiResponse = await askAI(`
You are a military equipment ecommerce assistant.

The user is browsing a tactical store with categories:
- Specialized Vehicles
- Protective Gear
- Armoury
- Optics
- Guides & Books
- Accessories
- Unmanned Vehicles

User question:
${query}

Answer briefly and recommend categories or products.
`);

    res.json({ aiResponse });

  } catch (error) {
    console.error("❌ AI ERROR:", error);
    res.status(500).json({ error: "AI service failed" });
  }
});



// --- 7. BASE ROUTE ---
app.get('/', (req, res) => {
  res.status(200).send('🛡️ GFSS Tactical API is online and encrypted.');
});


// --- 8. START COMMAND CENTER ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
==========================================
🛡️  GFSS SERVER INITIALIZED & DEPLOYED
📡  COMM_LINK: http://localhost:${PORT}
🔗  FRONTEND_ORIGIN: http://localhost:3000
🤖  AI_ASSISTANT: ENABLED
==========================================
`);
});