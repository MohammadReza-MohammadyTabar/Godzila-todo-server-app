const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    message: "please type name",
  },
  age: Number,
  github: {
    type: String,
    required: true,
    message: "please set age",
  },
  linkedin: {
    type: String,
    required: true,
    message: "please set linkedin url",
  },
  skills: [],
  languages: [],

  imageUrl: {
    type: String,
    required: true,

    message: "please set email",
  },
  admin: { type: Boolean, default: false },
});

module.exports = model("user", userSchema);
