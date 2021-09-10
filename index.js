const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/dog', (req, res) => {
  res.send('Bark bark')
})

app.listen(3000, () => {
  console.log("App is listening on port 3000")
})

const { clusterName } = require('./config')
const { randomUUID } = require('crypto')
const { json } = require('express')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)


const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

const characterSchema = new mongoose.Schema({
  // id: randomUUID, // automatically included, right?
  name: String,
  class: String,
  level: Number, // integer?
  str: Number,
  dex: Number,
  con: Number,
  wis: Number,
  int: Number,
  chr: Number,
  // defaultAttack: json object
})

const Character = mongoose.model('Character', characterSchema);

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: Boolean,
  character: Array,
  activeCharacter: String // character ID
})

const Profile = mongoose.model('Profile', profileSchema)

const rollLogSchema = new mongoose.Schema({
  // id: 
  timestamp: Date, //datetime?
  text: String
})

const RollLog = mongoose.model('RollLog, rollLogSchema')




