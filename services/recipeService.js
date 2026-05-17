const Recipe = require("../models/Recipe");

const getAllRecipes = async (category) => {
  const filter = {};
  if (category) {
    filter.category = category;
  }
  const recipes = await Recipe.find(filter);
  return recipes;
};

const createRecipe = async (recipeData) => {
  const { cookingTime } = recipeData;

  if (cookingTime !== undefined && cookingTime <= 0) {
    const error = new Error("Cooking time must be a positive number");
    error.statusCode = 400;
    throw error;
  }

  const recipe = new Recipe(recipeData);
  const savedRecipe = await recipe.save();
  return savedRecipe;
};

const updateRecipe = async (id, updateData) => {
  const { cookingTime } = updateData;

  if (cookingTime !== undefined && cookingTime <= 0) {
    const error = new Error("Cooking time must be a positive number");
    error.statusCode = 400;
    throw error;
  }

  const updatedRecipe = await Recipe.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  return updatedRecipe;
};

const deleteRecipe = async (id) => {
  const deletedRecipe = await Recipe.findByIdAndDelete(id);
  return deletedRecipe;
};

module.exports = {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
