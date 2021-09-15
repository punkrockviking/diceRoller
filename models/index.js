const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')

const Profile = require('./models/profile')
const Character = require('./models/character')
const RollLog = require('./models/rollLog')
const QuickAttack = require('./models/quickAttack')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.render('products/index', { products })
})

app.listen(3000, () => {
  console.log("App is listening on port 3000")
})