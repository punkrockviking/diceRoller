const mongoose = require('mongoose')

const { clusterName } = require('./config')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)


const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// Add data to collection
// const amadeus = new Movie({title: 'Amadeus', year: 1989, score: 9.2, rating: 'R'})
// amadeus.save()

// const inception = new Movie({title: 'Inception', year: 2000, score: 7, rating: 'PG-13'})
// inception.save()

// find and update data
// Movie.findOneAndUpdate({title: 'Inception'}, {score: 7.1}, (err) => {
//   if(err) {
//     console.log(err)
//   }
// })

// add many to collection
// Movie.insertMany([
//   { title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
//   { title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//   { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//   { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//   { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
// .then(data => {
//   console.log('Inserted movies!')
//   console.log(data)
// })

// find and update, then use new updated data
// Movie.findOneAndUpdate({title: 'Inception'}, {score: 7.2}, {new: true}).then(m => console.log(m))

// deleting data from db
// Movie.remove({title: "Amelie"}).then(msg => console.log(msg))
// Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))













// TO TEST CONNECTION

// const userSchema = require('./userSchema.js')
// const User = mongoose.model('user', userSchema, 'user')

// async function createUser(username) {
//   return new User({
//     username,
//     created: Date.now()
//   }).save()
// }

// async function findUser(username) {
//   return await User.findOne({ username })
// }

// (async () => {
//   const connector = mongoose.connect(connectionString)
//   const username = process.argv[2].split('=')[1]

//   let user = await connector.then(async () => {
//     return findUser(username)
//   })

//   if (!user) {
//     user = await createUser(username)
//   }

//   console.log(user)
//   process.exit(0)
// })()

// this is a note
