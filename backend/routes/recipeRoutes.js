// Dependencies and Imports
const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipeModel");

const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRandomRecipe,
  getRecipesByTitle,
  getRecipesByIngredient,
} = require("../controllers/recipeController");

// Basic CRUD Routes

// Route to fetch all recipes or post a new recipe
router.route("/")
  .get(getRecipes)
  .post(protect, createRecipe); // Protected route, requires authentication

// Fetch a specific recipe, update, or delete by its ID
router.route("/:id")
  .get(getRecipe)
  .put(protect, updateRecipe)    // Protected route, requires authentication
  .delete(protect, deleteRecipe); // Protected route, requires authentication

// Special Routes

// Fetch a random recipe
router.route("/random")
  .get(getRandomRecipe);

// Search Features

// Search recipes specifically by their titles
router.route("/search/title/:title")
  .get(getRecipesByTitle);

// Search recipes by a specific ingredient they contain
router.route("/search/ingredient/:ingredient")
  .get(getRecipesByIngredient);

// General search through recipes (both by title and ingredients)
router.get("/search", async (req, res) => {
  const { query } = req.query; // Extract the search query from the URL parameters
  
  try {
    // Search in both the 'title' and 'ingredients.name' fields in the recipes collection
    const recipes = await Recipe.find({
      $or: [
        { "title": { $regex: new RegExp(query, "i") } },
        { "ingredients.name": { $regex: new RegExp(query, "i") } }
      ]
    });
    
    res.json({ success: true, data: recipes });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
