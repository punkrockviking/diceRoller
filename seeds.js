const mongoose = require("mongoose");
const Profile = require("./models/profile");
const Character = require("./models/character");
const RollLog = require("./models/rollLog");

const { clusterName } = require("./config");
const { randomUUID } = require("crypto");
const { json } = require("express");
const { monitorEventLoopDelay } = require("perf_hooks");
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connector = mongoose.connect(connectionString);


// // fetch character
// const rollLogGenerator = async () => {
//   const character = await Character.findOne({ name: 'Brogan'});
//   console.log(character);
//   const characterId = character._id
//   console.log(characterId)
//   const seedRollLog = {
//     timestamp: Date(), 
//     text: '3 + 2 is a 5, bummerski',
//     _character: new mongoose.Types.ObjectId(characterId)
//   }
//   RollLog.create(seedRollLog)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// rollLogGenerator();

// create roll log with character id


// const profileGenerator = async () => {
//   const characters = await Character.find({});
//   console.log(characters);
//   const seedProfile = {
//     name: "Dan",
//     avatar: false,
//     characters: characters,
//     activeCharacter: "no active character",
//   };
//   Profile.insertMany(seedProfile)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// profileGenerator();

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
