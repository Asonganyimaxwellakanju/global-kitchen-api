const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  ingredients: {
    type: [String],
    required: true,
  },

  instructions: {
    type: String,
    required: true,
  },

  cookingTime: {
    type: Number,
    required: true,
    min: 1,
  },

  difficulty: {
    type: String,
    required: true,
    enum: ["easy", "medium", "hard"],
  },

  category: {
    type: String,
    required: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index on category — expected to handle heavy lookup rates
recipeSchema.index({ category: 1 });

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
