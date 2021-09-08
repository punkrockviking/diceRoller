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
        min: [0, 'Price must be positive. We are not a pawn shop']
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
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L', 'XL']
    }

})

// Model Instance Method
productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale
    return this.save()
}

// Model Instance Method
productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat)
    return this.save()
}

// Model Static Method
productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike'})
    console.log(foundProduct)
    await foundProduct.toggleOnSale()  
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))
// findProduct()







// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'S' })
// bike.save()
// .then(data => {
//     console.log("It worked!")
//     console.log(data)
// })
// .catch(err => {
//     console.log('ERROR')
//     console.log(err.errors.name.properties.message)
// })


// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 19.99}, {new: true, runValidators: true} )
// .then(data => {
//     console.log("It worked!")
//     console.log(data)
// })
// .catch(err => {
//     console.log('ERROR')
//     console.log(err.errors.name.properties.message)
// })




