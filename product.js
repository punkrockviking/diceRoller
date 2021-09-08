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
        default: 0,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }

})

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({ name: 'Tire Pump', price: 20, categories: ['Cycling'] })
// bike.save()
// .then(data => {
//     console.log("It worked!")
//     console.log(data)
// })
// .catch(err => {
//     console.log('ERROR')
//     console.log(err.errors.name.properties.message)
// })


Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 19.99}, {new: true, runValidators: true} )
.then(data => {
    console.log("It worked!")
    console.log(data)
})
.catch(err => {
    console.log('ERROR')
    console.log(err.errors.name.properties.message)
})




