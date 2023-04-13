const mongoose = require("mongoose");

const TankSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tankName: { type: String, required: true },
  fish: [
    {
      fishName: { type: String, required: true },
      fishOxygen: { type: Number, required: true },
      fishPH: { type: Number, required: true }
    },
  ],
  location: { type: String, required: true },
  phlevel: { type: Number, required: true },
  oxygen: { type: Number, required: true },
});

module.exports = mongoose.model("Tank", TankSchema);
