const express = require("express");
const recipeRoutes = require("./routes/recipeRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/recipes", recipeRoutes);
app.use(errorHandler);

module.exports = app;
