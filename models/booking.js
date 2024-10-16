const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  maid: { type: mongoose.Schema.Types.ObjectId, ref: "Maid", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "canceled"],
    default: "pending",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
