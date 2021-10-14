const mongoose = require('mongoose')
const express = require('express')
const app = express()
// import express from 'express'

const { Character, Profile, RollLog } = require('./models')
// const { selectedProfile } = require('../frontend/src/app')

app.listen(8000, () => {
  console.log("App is listening on port 8000")
})

const { clusterName } = require('./config')
const { randomUUID } = require('crypto')
const { json } = require('express')
const connectionString = `mongodb+srv://${clusterName}@cluster0.y81ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connector = mongoose.connect(connectionString)


// establish home route which would have the profiles information
app.get('/profiles', async (req, res) => {
  // res.send('profiles live here')      
  const profiles = await Profile.find({})
  console.log(profiles)
  res.json({ profiles })
  // console.log('*******************************', req)
})

// request for all the characters belonging to a profile
// app.get('/characters', async (req, res) => {
  
//   res.send('characters live here')
//   // const characters = await Character.find({})
//   // res.render('characters/index', { characters })
// })

app.get('/session', async (req, res) => {

  // res.send('rollLog lives here')
  const profileId = req.query.profileId
  // const characterId = req.query.characterId
  // const characters = await Character.find({ _profile: profileId});
  // const sessionCharacter = await Character.fineOne({ _characters: characterId }) // keep your train of thought here
  const characters = await Character.find({});
  res.json({ characters })
  // res.json({ sessionCharacter })
  // const rollLog = await RollLog.find({_character: characterId })
  // .sort({timestamp: -1}).limit(10)
  // res.json(rollLog)
})
