const mongoose = require("mongoose");
module.exports = async (URI) => {
  try {
    await mongoose.connect(URI);
  } catch (error) {}
};
