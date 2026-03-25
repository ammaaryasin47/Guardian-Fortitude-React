const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

// 1. DNS Fix for Atlas connection issues (Essential for some 5G/ISP setups)
const dns = require('node:dns/promises');
dns.setServers(['1.1.1.1', '8.8.8.8']);

// 2. Initialize Express
const app = express();

// 3. Global Middleware 
// Note: CORS must come BEFORE routes and MUST have credentials: true for cookies
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true                 
}));

// These allow the server to "read" the data coming from your React app
app.use(express.json());      // For parsing application/json
app.use(cookieParser());     // For parsing cookies from the browser

// 4. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🚀 MongoDB Atlas Connected via Mongoose"))
  .catch(err => console.error("❌ Connection Error: ", err));

// 5. Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// 6. Base Route (Optional: for testing if server is alive)
app.get('/', (req, res) => {
  res.send('Guardian Fortitude Services API is running...');
});

// 7. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  🛡️  GFSS Server Initialized
  📡  Port: ${PORT}
  🔗  Origin: http://localhost:3000
  `);
});