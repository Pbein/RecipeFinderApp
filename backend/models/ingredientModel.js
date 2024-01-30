// ingredientsModel.js is a Mongoose schema for the ingredients collection in MongoDB
// Import required package
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    notes: {
        type: String,
        trim: true
    },
    allergens: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Allergen'
    }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;

// ingredientsModel.js is a Mongoose schema for the ingredients collection in MongoDB