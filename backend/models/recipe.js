const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: true,
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    ingredients: {
        type: [String],
        required: [true, 'Please enter ingredients']
    },
    instructions: {
        type: [String],
        required: [true, 'Please enter instructions']
    },
});

module.exports = mongoose.model('Recipe', recipeSchema);