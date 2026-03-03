const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

// 1. DNS Fix for Atlas connection issues
const dns = require('node:dns/promises');
dns.setServers(['1.1.1.1', '8.8.8.8']);

// 2. INITIALIZE the app (Must be before app.use)
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true                 
}));

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
})); 
app.use(express.json());

// 4. DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🚀 MongoDB Atlas Connected via Mongoose"))
  .catch(err => console.log("❌ Connection Error: ", err));

// 5. ROUTES
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// 6. START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));