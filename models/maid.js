const mongoose = require("mongoose");

const maidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: Boolean, default: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Maid", maidSchema);
