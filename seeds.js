const mongoose = require('mongoose')
const Product = require('./models/product')

const { clusterName } = require('./config')
const { randomUUID } = require('crypto')
const { json } = require('express')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)

// const p = new Product ({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })

// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
    {
        name: 'Orange',
        price: 1,
        category: 'fruit'
    },
    {
        name: 'Ogre Onions',
        price: 75.20,
        category: 'vegetable'
    },
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})