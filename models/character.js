const mongoose = require('mongoose')


const characterSchema = new mongoose.Schema({
    // id: randomUUID, // automatically included, right?
    name: String,
    class: String,
    level: Number, // integer?
    str: Number,
    dex: Number,
    con: Number,
    wis: Number,
    int: Number,
    chr: Number,
    // defaultAttack: json object
  })
  
export const Character = mongoose.model('Character', characterSchema);
  
module.exports = Character;
