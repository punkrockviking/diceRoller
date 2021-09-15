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


