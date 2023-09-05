const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Welcome Route
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe Finder API');
});

// Recipe routes
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/api/recipes', recipeRoutes);

// Global error handler (should come AFTER other app.use() calls)
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error stack for debugging purposes
    res.status(500).json({ success: false, message: 'Server error' });
});

// Connect to DB
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => console.error("Failed to connect to MongoDB: ", err.message));
