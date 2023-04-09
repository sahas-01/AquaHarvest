const mongoose = require("mongoose");

const FishSchema = new mongoose.Schema({
  userToken: { type: String, required: false },
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: Number, required: true },
  price: { type: Number }
});

module.exports = mongoose.model("Fish", FishSchema);
