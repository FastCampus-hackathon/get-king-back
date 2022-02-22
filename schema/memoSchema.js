const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  text: String,
});

const Memo = mongoose.model("Memo", memoSchema);

module.exports = Memo;
