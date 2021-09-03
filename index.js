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
// const amadeus = new Movie({title: 'Amadeus', year: 1989, score: 9.2, rating: 'R'})
// amadeus.save()

// const inception = new Movie({title: 'Inception', year: 2000, score: 7, rating: 'PG-13'})
// inception.save()

Movie.findOneAndUpdate({title: 'Inception'}, {score: 6}, (err) => {
  if(err) {
    console.log(err)
  }
})

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
