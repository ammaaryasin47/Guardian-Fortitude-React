const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dns = require("node:dns/promises");
require("dotenv").config();

const aiRoutes = require("./routes/ai");
const askAI = require("./models/aiService");

// ===============================
// 1️⃣ DNS CONFIG
// ===============================
dns.setServers(["1.1.1.1", "8.8.8.8"]);


// ===============================
// 2️⃣ INITIALIZE APP
// ===============================
const app = express();


// ===============================
// 3️⃣ GLOBAL MIDDLEWARE
// ===============================
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());


// ===============================
// 4️⃣ DATABASE CONNECTION
// ===============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("🚀 [SYSTEM]: MongoDB Atlas Connected via Mongoose");
  })
  .catch((err) => {
    console.error("❌ [ERROR]: Database Connection Failure:", err);
  });


// ===============================
// 5️⃣ ROUTE IMPORTS
// ===============================
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const Order = require("./models/Order");
const adminRoutes = require("./routes/adminRoutes");


// ===============================
// 6️⃣ ROUTE DEFINITIONS
// ===============================
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/", aiRoutes);


// ===============================
// 🤖 AI PRODUCT ASSISTANT
// ===============================
app.post("/api/ai-recommend", async (req, res) => {
  try {

    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        error: "Query is required"
      });
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

    res.status(500).json({
      error: "AI service failed"
    });

  }
});

const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

app.set("io", io);


// ===============================
// 7️⃣ BASE ROUTE
// ===============================
app.get("/", (req, res) => {
  res.status(200).send("🛡️ GFSS Tactical API is online and encrypted.");
});


// ===============================
// 8️⃣ START SERVER
// ===============================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`
==========================================
🛡️  GFSS SERVER INITIALIZED & DEPLOYED
📡  COMM_LINK: http://localhost:${PORT}
🔗  FRONTEND_ORIGIN: http://localhost:3000
🤖  AI_ASSISTANT: ENABLED
==========================================
`);
});