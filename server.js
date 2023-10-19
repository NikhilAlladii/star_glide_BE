const express = require("express");
const mongoose = require("mongoose");
const Homes = require("./modal");
const Home = require("./homeSchema");
const app = express();
app.use(require("cors")());

const username = encodeURIComponent("infonagarajualladi");
const password = encodeURIComponent("Dhanalaxmi@888");

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.kg67y3k.mongodb.net/star_glide?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/homes", async (req, res) => {
  try {
    console.log("req rec");
    const allHomes = await Homes.find();
    res.json(allHomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// app.get("/home/:id", (req, res) => {
//   const homeId = req.params.id;

//   console.log("home", homeId);
//   Home.findById(homeId)
//     .exec()
//     .then((home) => {
//       if (!home) {
//         return res.status(404).json({ error: "Home not found" });
//       }
//       return res.json(home);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: "Internal server error" });
//     });
// });

app.listen(3001, () => {
  console.log("serverr running;");
});
