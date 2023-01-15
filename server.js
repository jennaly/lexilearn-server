require('dotenv').config({ path: './config/config.env' });

const cors = require('cors');
const { urlencoded } = require('express');
const express = require('express');

const PORT = process.env.PORT;
const connectDB = require('./config/db');
const favoriteWordsRoutes = require('./routes/favoriteWords');

const app = express();

// connect to database
connectDB();

// middleware 
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/favoriteWords', favoriteWordsRoutes);

app.listen(PORT, console.log(`server running at port ${PORT}`));