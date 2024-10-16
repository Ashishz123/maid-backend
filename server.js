const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = 3000;
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ashishguptagupta3662:Vi3IcyBQId2dNKBv@cluster0.lnnyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {}
    );
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
