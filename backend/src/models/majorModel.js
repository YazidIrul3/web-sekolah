const mongoose = require("mongoose");

const majorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const majorModel = mongoose.model("Major", majorSchema);

module.exports = majorModel;
