//Set up a Route: In your routes file, define routes for user registration and login.
// Path: backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

//Routes
router
    .route('/register')
    .post(registerUser);

router
    .route('/login')
    .post(loginUser);

module.exports = router;