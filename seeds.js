const mongoose = require('mongoose')
const Profile = require('./models/profile')
const Character = require('./models/character')
const RollLog = require('./models/rollLog')

const { clusterName } = require('./config')
const { randomUUID } = require('crypto')
const { json } = require('express')
const { monitorEventLoopDelay } = require('perf_hooks')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)


const characterList = async function() {
    return await Character.find({})
}

const seedProfile = {
    name: 'Dan',
    avatar: false,
    characters: characterList,
    activeCharacter: 'no active character'
}

Profile.insertMany(seedProfile)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})




// const seedCharacters = [
//     {
//         name: 'Leofric',
//         class: 'Fighter',
//         level: 4,
//         str: 18,
//         dex: 14,
//         con: 16,
//         wis: 12,
//         int: 8,
//         chr: 10
//     },
//     {
//         name: 'Brogan',
//         class: 'Barbarian',
//         level: 8,
//         str: 18,
//         dex: 14,
//         con: 18,
//         wis: 12,
//         int: 8,
//         chr: 10
//     },
//     {
//         name: 'Zaag',
//         class: 'Warlock',
//         level: 2,
//         str: 8,
//         dex: 12,
//         con: 13,
//         wis: 12,
//         int: 8,
//         chr: 18
//     },
//     {
//         name: 'Oleg',
//         class: 'Wizard',
//         level: 1,
//         str: 8,
//         dex: 13,
//         con: 15,
//         wis: 12,
//         int: 18,
//         chr: 10
//     },
// ]

// Character.insertMany(seedCharacters)
// .then(res => {
//     console.log(res)
// })
// .catch(e => {
//     console.log(e)
// })