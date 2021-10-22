const mongoose = require("mongoose");

const rollLogSchema = new mongoose.Schema({
  timestamp: Date, //datetime?
  text: String,
  _character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Character",
  },
});

const RollLog = mongoose.model("RollLog", rollLogSchema);

module.exports = RollLog;
