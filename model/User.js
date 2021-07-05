const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 30
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024
  },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }]
});

module.exports = mongoose.model("User", userSchema);
