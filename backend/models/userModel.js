// Import required packages and modules
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Define user schema for MongoDB using mongoose
const userSchema = new mongoose.Schema({
    // Username field with validation rules
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
        trim: true,
        maxlength: [20, 'Username cannot be more than 20 characters']
    },
    // Email field with validation rules
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    // Password field with validation rules
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
    // Flag to determine if the user is an admin
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

// Middleware to encrypt password before saving user to the database
userSchema.pre('save', async function(next) {
    // Generate a salt for hashing
    const salt = await bcrypt.genSalt(10);
    // Hash and replace plain text password with the hashed version
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to generate a JWT for user authentication
userSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
}

// Method to compare provided password with the hashed password in the database
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Export the User model based on the userSchema
module.exports = mongoose.model('User', userSchema);
