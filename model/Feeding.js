const mongoose = require("mongoose");

const feedingSchema = new mongoose.Schema({
  foodType: {
    type: String,
    required: true
  },
  feedingType: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet"
  }
});

module.exports = mongoose.model("Feedings", feedingSchema);
