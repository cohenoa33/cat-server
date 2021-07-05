const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  feedings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feeding" }]
});

module.exports = mongoose.model("Pet", petSchema);
