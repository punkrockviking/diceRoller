const mongoose = require('mongoose')

const defaultAttackSchema = new mongoose.Schema({
    info: String 
})

const characterSchema = new mongoose.Schema({
    // id: randomUUID, // automatically included, right?
    name: String,
    _profile: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    },
    class: String,
    level: Number, // integer?
    str: Number,
    dex: Number,
    con: Number,
    wis: Number,
    int: Number,
    chr: Number,
    defaultAttack: [defaultAttackSchema]
  })
  
const Character = mongoose.model('Character', characterSchema);
  
module.exports = Character;
