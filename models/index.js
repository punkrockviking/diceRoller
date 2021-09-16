const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')

const Profile = require('./profile')
const Character = require('./character')
const RollLog = require('./rollLog')


// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')


app
    .route('/profiles')
    .get(async (req, res) => {
        res.send('profiles live here')
        // const profiles = await Profile.find({})
        // console.log(profiles)
        // res.render( { profiles })
    })

app.get('/characters', async (req, res) => {
    res.send('characters live here')
    // const characters = await Character.find({})
    // res.render('characters/index', { characters })
})

app.get('/rollLog', async (req, res) => {
    res.send('rollLog lives here')
    // const rollLog = await RollLog.find({})
    // res.render('rollLog/index', { rollLog })
})


app.listen(3000, () => {
  console.log("App is listening on port 3000")
})

