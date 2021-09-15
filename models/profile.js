const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name: String,
    avatar: Boolean,
    character: Array,
    activeCharacter: String // character ID
  })
  
export const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;
