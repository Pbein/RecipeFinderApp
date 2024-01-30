// dietaryFlagModel.js defines the structure of a dietary flag, including the name and description. The DietaryFlag model is exported based on the schema, allowing the application to interact with the MongoDB database using this model.
// Import required package
const mongoose = require('mongoose');

// Define dietary flag schema for MongoDB using mongoose
const dietaryFlagSchema = new mongoose.Schema({
    // Name of the dietary flag
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // Description or details about the dietary flag
    description: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('DietaryFlag', dietaryFlagSchema);
// dietaryFlagModel.js defines the structure of a dietary flag, including the name and description. The DietaryFlag model is exported based on the schema, allowing the application to interact with the MongoDB database using this model.