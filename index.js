// 🔐
require('dotenv').config();

// 📦
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// 🚀 
const app = express();

// 
connectDB();

// 🛡️
app.use(cors());
app.use(express.json());

// 🛣️ Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); 
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// 🟢  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
