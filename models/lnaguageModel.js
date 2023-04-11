const { Schema, model } = require("mongoose");
const languagesSchema = Schema({
  name: String,
});
module.exports = model("language", languagesSchema);
