const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 

const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Product = require('./models/product'); // Ensure this path matches your model

// Load env vars
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🛡️  System Linked: MongoDB Connected for Seeding...');
  } catch (err) {
    console.error('❌ Connection Failed:', err.message);
    process.exit(1);
  }
};

// Read the combined JSON file
// Ensure you have combined all 8 parts into one 'products.json' file
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, 'utf-8')
);

// Import Data into DB
const importData = async () => {
  try {
    await connectDB();

    // 1. Clear existing inventory (Wipe the slate clean)
    await Product.deleteMany();
    console.log('🧹 Existing inventory purged from Database.');

    // 2. Insert the new 181 items
    await Product.insertMany(products);
    
    console.log('🚀 ARMOURY FULLY STOCKED: 181 Products Synced Successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Deployment Error:', err);
    process.exit(1);
  }
};

// Execute
importData();