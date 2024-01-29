// Import required package
const mongoose = require('mongoose');

// Define ingredient sub-schema for a recipe
const ingredientSchema = new mongoose.Schema({
    // Name of the ingredient
    name: {
        type: String,
        required: true,
        trim: true
    },
    // Quantity or measurement for the ingredient
    quantity: {
        type: String,
        required: true,
        trim: true
    },
    // Additional notes or description for the ingredient
    notes: {
        type: String,
        trim: true
    }
});

// Define instruction sub-schema for a recipe
const instructionSchema = new mongoose.Schema({
    // Name or title for the step
    step: {
        type: String,
        required: true,
        trim: true
    },
    // Detailed description or action for the step
    details: {
        type: String,
        required: true,
        trim: true
    }
});

// Define main recipe schema
const recipeSchema = new mongoose.Schema({
    // Title or name of the recipe
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: true,
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    // Brief summary or overview of the recipe
    description: {
        type: String,
        required: [true, 'Please enter a description'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    // List of ingredients required for the recipe
    ingredients: [ingredientSchema],
    // Step-by-step guide on preparing the recipe
    instructions: [instructionSchema],
    // Image of the recipe
    imageUrl: {
        type: String,
        default: 'no-photo.jpg'
    },
});

// Export the Recipe model based on the recipeSchema
module.exports = mongoose.model('Recipe', recipeSchema);
