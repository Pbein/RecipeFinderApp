// Import necessary dependencies
const express = require("express");
const router = express.Router();

// Middleware
const { protect } = require("../middleware/authMiddleware");

// Model
const Recipe = require("../models/recipeModel");

// Controllers
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

// Middleware to log each request to the console for debugging and tracing
router.use((req, res, next) => {
  console.log(`Request to: ${req.originalUrl} using method ${req.method}`);
  next();
});

// ----------- Basic CRUD Routes --------------

router.route("/")
  .get(getRecipes)
  .post(protect, createRecipe); 

// ----------- Special Routes ------------------

router.route("/random").get(getRandomRecipe);

// ----------- Search Features ------------------

router.route("/search").get(async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ success: false, message: "Please provide a search query." });
  }  

  try {
    const recipes = await Recipe.find({
      $or: [
        { title: { $regex: new RegExp(query, "i") } },
        { "ingredients.name": { $regex: new RegExp(query, "i") } },
      ],
    });

    res.json({ success: true, data: recipes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message, query });
  }
});

router.route("/search/title/:title").get(getRecipesByTitle);

// Use the controller function instead of the inline function
router.route("/search/ingredient/:ingredient").get(getRecipesByIngredient);

// Fetch, update, or delete a specific recipe by its ID
router.route("/:id")
  .get(getRecipe)
  .put(protect, updateRecipe)
  .delete(protect, deleteRecipe); 

// Export the router
module.exports = router;
