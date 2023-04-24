// Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Declare variables
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_DB_URL;

// Connect to MongoDB database
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL, () => {
  console.log("Connected to database successfully");
});

// Configure middleware
const app = express();
app.use(express.json());
app.use(cors());

//import routes
const userRoutes = require("./routes/usersRoutes");
app.use("/api/users/", userRoutes);

// Define routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Mobilicis India Assignment API",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
