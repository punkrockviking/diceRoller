const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name: String,
    avatar: Boolean,
    activeCharacter: String // character ID
  })
  
const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;
