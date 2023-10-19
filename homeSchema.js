const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  _id:String,
  name: String,
  garage: Number,
  address: String,
  imageLink: String,
  maxBath: Number,
  maxBeds: Number,
  maxSqFt: Number,
  minBath: Number,
  minBeds: Number,
  minSqFt: Number,
  price: Number,
  date: Date,
  moveInReady: Boolean,
  readyToBuild: Boolean,
  tourOptions: [
    {
      virtualOptions: Boolean,
    },
  ],
  neighbourHood: [
    {
      checked: Boolean,
      id: String,
      label: String,
      value: String,
    },
  ],
  amenties: [
    {
      checked: Boolean,
      id: String,
      label: String,
      value: String,
    },
  ],
  schoolDistrcits: [
    {
      auroraPublicSchools: Boolean,
      brighttom: Boolean,
      Douglas: Boolean,
      jefferson: Boolean,
    },
  ],
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
