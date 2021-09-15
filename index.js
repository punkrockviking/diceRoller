const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')

const Product = require('./models/product')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.render('products/index', { products })
})

app.listen(3000, () => {
  console.log("App is listening on port 3000")
})

const { clusterName } = require('./config')
const { randomUUID } = require('crypto')
const { json } = require('express')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)


// KEEP FOR FINAL APP
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

export const Movie = mongoose.model('Movie', movieSchema);
// export default Movie

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

export const Character = mongoose.model('Character', characterSchema);

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: Boolean,
  character: Array,
  activeCharacter: String // character ID
})

export const Profile = mongoose.model('Profile', profileSchema)

const rollLogSchema = new mongoose.Schema({
  // id: 
  timestamp: Date, //datetime?
  text: String
})

export const RollLog = mongoose.model('RollLog', rollLogSchema)




