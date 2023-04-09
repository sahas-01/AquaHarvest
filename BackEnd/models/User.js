const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true },
    bio: { type: String, required: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
    tanks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tank" }],
});

module.exports = mongoose.model("User", UserSchema);
