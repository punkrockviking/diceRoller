const mongoose = require('mongoose')

const { clusterName } = require('./config')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    onSale: {
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 599 })
bike.save()
.then(data => {
    console.log("It worked!")
    console.log(data)
})
.catch(err => {
    console.log('ERROR')
    console.log(err.errors.name.properties.message)
})



