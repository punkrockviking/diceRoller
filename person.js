const mongoose = require('mongoose')

const { clusterName } = require('./config')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function() {
    console.log("About to save...")
})

personSchema.post('save', async function() {
    console.log("Finished saving.")
})

const Person = mongoose.model('Person', personSchema)

// const tammy = new Person({first: 'Tammy', last: 'Chow'})
// console.log(tammy.fullname)

const k = new Person({first: 'Kristen', last: 'Sun'})
k.save()