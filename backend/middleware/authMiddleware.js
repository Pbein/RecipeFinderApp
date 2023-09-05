//JWT Middleware

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

exports.protect = asyncHandler(async(req, res, next) => {
    let token;

    // Check if token is sent and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Decode token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find user by ID from decoded token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (err) {
            console.error(err);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }

    // Check if token exists
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});