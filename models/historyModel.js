const { Schema, model } = require("mongoose");
const historySchema = Schema({
  date: Date,
  typeOfModify: String,
  userName: String,
  taskName: String,
});
module.exports = model("history", historySchema);
