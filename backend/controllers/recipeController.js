const Recipe = require("../models/recipeModel");
const asyncHandler = require("express-async-handler");

/**
 * @desc    Retrieve a paginated list of recipes
 * @route   GET /api/recipes?page=1&limit=10
 * @access  Public
 */
exports.getRecipes = asyncHandler(async (req, res, next) => {
  // Set up pagination parameters with defaults
  const page = parseInt(req.query.page, 10) || 1; // Page number, default is 1
  const limit = parseInt(req.query.limit, 10) || 10; // Number of items per page, default is 10
  const skip = (page - 1) * limit;

  try {
    const recipes = await Recipe.find().skip(skip).limit(limit);
    const total = await Recipe.countDocuments();

    return res.status(200).json({
      success: true,
      count: recipes.length,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: recipes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

/**
 * @desc    Retrieve a single recipe by ID
 * @route   GET /api/recipes/:id
 * @access  Public
 */
exports.getRecipe = asyncHandler(async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "No recipe found",
      });
    }

    return res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

/**
 * @desc    Add a new recipe
 * @route   POST /api/recipes
 * @access  Public
 */
exports.createRecipe = asyncHandler(async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);

    return res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch (err) {
    // Handle validation errors
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
});

/**
 * @desc    Update an existing recipe by ID
 * @route   PUT /api/recipes/:id
 * @access  Public
 */
exports.updateRecipe = asyncHandler(async (req, res, next) => {
  try {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "No recipe found",
      });
    }

    recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return updated object
      runValidators: true, // Validate the updated data
    });

    return res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (err) {
    // Handle validation errors
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
});

/**
 * @desc    Remove a recipe by ID
 * @route   DELETE /api/recipes/:id
 * @access  Public
 */
exports.deleteRecipe = asyncHandler(async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "No recipe found",
      });
    }

    await recipe.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

/**
 * @desc    Retrieve a random recipe
 * @route   GET /api/recipes/random
 * @access  Public
 */
exports.getRandomRecipe = asyncHandler(async (req, res, next) => {
  try {
    const count = await Recipe.countDocuments();
    const random = Math.floor(Math.random() * count);
    const recipe = await Recipe.findOne().skip(random);

    return res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

/**
 * @desc    Search for recipes by title
 * @route   GET /api/recipes/search/:title
 * @access  Public
 */
exports.getRecipesByTitle = asyncHandler(async (req, res, next) => {
  try {
    // Use regular expression for a case-insensitive search
    const recipes = await Recipe.find({
      title: { $regex: req.params.title, $options: "i" },
    });

    return res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

/**
 * @desc    Search for recipes by ingredient
 * @route   GET /api/recipes/search/ingredient/:ingredient
 * @access  Public
 */
exports.getRecipesByIngredient = asyncHandler(async (req, res, next) => {
  const { ingredient } = req.params;

  try {
    const recipes = await Recipe.find({
      "ingredients.name": { $regex: new RegExp(ingredient, "i") },
    });

    return res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});
