const { Schema, model } = require("mongoose");
const tasksSchema = Schema({
  name: { type: String, required: true },
  completed: {
    type: Boolean,
    required: true,
    message: "please set name of the task",
    default: false,
  },
  userID: {
    type: String,
    required: true,
  },
});
module.exports = model("task", tasksSchema);
