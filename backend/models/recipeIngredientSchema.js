// Importing Mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Defining the schema for the relationship between recipes and ingredients.
// This schema is used to create a many-to-many relationship between recipes and ingredients.
const recipeIngredientSchema = new mongoose.Schema({
    // Reference to the Recipe model. This creates a connection between the ingredient
    // and the recipe it belongs to. The field is marked as required, indicating 
    // that every recipe ingredient must be associated with a recipe.
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    },
    // Reference to the Ingredient model. This field links the ingredient to its
    // detailed information like name and allergens. Similar to the recipe field,
    // it is marked as required.
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
    },
    // A field to specify the quantity of the ingredient needed for the recipe.
    // The type is set as String to accommodate various units of measurement.
    // It is a required field to ensure that each ingredient in a recipe has a quantity.
    quantity: {
        type: String,
        required: true,
        trim: true
    },
    // An optional field for any additional notes regarding the ingredient,
    // such as alternative ingredients or preparation tips.
    notes: {
        type: String,
        trim: true
    }
});

// Creating the RecipeIngredient model from the defined schema.
// This model will be used for creating and querying recipe ingredient data.
const RecipeIngredient = mongoose.model('RecipeIngredient', recipeIngredientSchema);

// Exporting the RecipeIngredient model to be used in other parts of the application.
module.exports = RecipeIngredient;
