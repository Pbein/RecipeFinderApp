// recipeModel.js defines the schema for a recipe, including sub-schemas for ingredients and instructions, and exports the Recipe model based on the schema.
// Import required package
const mongoose = require('mongoose');
const RecipeIngredient = require('./recipeIngredientSchema');

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
    ingredients: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RecipeIngredient' 
    }],
    // Step-by-step guide on preparing the recipe
    instructions: [instructionSchema],
    // Image of the recipe
    imageUrl: {
        type: String,
        default: 'no-photo.jpg'
    },
    // Dietary preference tags for the recipe
    dietaryFlags: [{ 
        type: String,
        enum: ['dairy-free', 'gluten-free', 'vegan', 'vegetarian', 'nut-free', 'low-carb']
    }],
    // Tags for the recipe
    tags: [{ 
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'snack', 'dessert', 'appetizer', 'side', 'main', 'drink, quick meals']
    }],
    // Estimated time required to prepare the recipe
    prepTime: {
        type: Number,
        required: [true, 'Please enter a prep time']
    },
    // Estimated time required to cook the recipe
    cookTime: {
        type: Number,
        required: [true, 'Please enter a cook time']
    },
    // Servings that the recipe yields
    servings: {
        type: Number,
        required: [true, 'Please enter a number of servings']
    },
    // Difficulty level of the recipe
    difficulty: {
        type: String,
        required: [true, 'Please enter a difficulty'],
        enum: ['easy', 'medium', 'hard', 'expert', 'masterchef']
    },
    // Rating of the recipe
    rating: {
        type: Number,
        default: 0
    },
});

// Export the Recipe model based on the recipeSchema
module.exports = mongoose.model('Recipe', recipeSchema);

// The recipeSchema defines the structure of a recipe, including the title, description, ingredients, instructions, image URL, dietary flags, tags, prep time, cook time, servings, difficulty, and rating. The Recipe model is exported based on the schema, allowing the application to interact with the MongoDB database using this model.