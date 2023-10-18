const mongoose = require("mongoose");

const Homes = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('homes',Homes)
