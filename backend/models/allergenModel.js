// allergenModel.js contains the schema for the allergen collection in the database.
// Import required package
const mongoose = require('mongoose');

// Define allergen schema for MongoDB using mongoose
const allergenSchema = new mongoose.Schema({
    // Name of the allergen
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // Description or details about the allergen
    description: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Allergen', allergenSchema);
// allergenModel.js contains the schema for the allergen collection in the database.