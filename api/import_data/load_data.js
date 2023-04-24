const mongoose = require("mongoose");
const data = require("../dummy_json_data/sample_data.json");
const User = require("../models/userSchema"); 

module.exports = async function loadData() {
  const MONGO_URL = process.env.MONGO_DB_URL; 

  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error(error);
  });

  db.once("open", async () => {
    console.log("Connected to database");

    try {
      await User.deleteMany(); // delete all existing documents in the User collection
      
      for (const user of data) {
        await User.create(user); // insert each document into the User collection
      }
      console.log(`Data loaded successfully`);
    } catch (error) {
      console.error(error);
    }

    db.close();
  });
};
