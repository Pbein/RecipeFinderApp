// This code creates a new router object and assigns it to the router variable. It then exports the router object so that it can be used in other files.

const express = require('express');
const router = express.Router();

const {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRandomRecipe,
    getRecipesByTitle,
    getRecipesByIngredient
} = require('../controllers/recipeController');

//Routes
router
    .route('/')
    .get(getRecipes)
    .post(createRecipe);

router
    .route('/random')  // Declare this before '/:id' route to avoid conflict
    .get(getRandomRecipe);

router
    .route('/search/title/:title')
    .get(getRecipesByTitle);

router
    .route('/search/ingredient/:ingredient')
    .get(getRecipesByIngredient);

router
    .route('/:id')
    .get(getRecipe)
    .put(updateRecipe)
    .delete(deleteRecipe);

module.exports = router;
