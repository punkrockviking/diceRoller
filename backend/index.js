const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { Character, Profile, RollLog } = require("./models");
// const { selectedProfile } = require('../frontend/src/app')

app.listen(8000, () => {
  console.log("App is listening on port 8000");
});

const { clusterName } = require("./config");
const { randomUUID } = require("crypto");
const { json } = require("express");
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connector = mongoose.connect(connectionString);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// establish home route which would have the profiles information
app.get("/profiles", async (req, res) => {
  // res.send('profiles live here')
  const profiles = await Profile.find({});
  console.log(profiles);
  res.json({ profiles });
  // console.log('*******************************', req)
});

// request for all the characters belonging to a profile
// app.get('/characters', async (req, res) => {

//   res.send('characters live here')
//   // const characters = await Character.find({})
//   // res.render('characters/index', { characters })
// })

app.get("/session", async (req, res) => {
  // res.send('rollLog lives here')
  const profileId = req.query.profileId;
  console.log("Fetching characters from a profileId!!!", profileId);
  const characters = await Character.find({ _profile: profileId });
  res.json({ characters });
  const characterId = req.query.characterId;
  const rollLog = await RollLog.find({ _character: characterId })
    .sort({ timestamp: -1 })
    .limit(10);
  res.json(rollLog);
});

app.post("/session", async (req, res) => {
  try {
    await Character.findOneAndUpdate({ _id: req.body._id }, req.body);
  } catch (err) {
    return res.status(500).send("Failed to update Character stats");
  }
  res.status(201).send("Updated character stats");
});
