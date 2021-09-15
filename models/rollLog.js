const mongoose = require('mongoose')


const rollLogSchema = new mongoose.Schema({
    // id: 
    timestamp: Date, //datetime?
    text: String
  })
  
export const RollLog = mongoose.model('RollLog', rollLogSchema)

module.exports = RollLog;