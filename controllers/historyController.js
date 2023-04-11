const historyModel = require("../models/historyModel");
const { StatusCodes } = require("http-status-codes");
const getAllHistory = async (req, res) => {
  try {
    const history = await historyModel.find();
    res.status(StatusCodes.OK).json(history);
  } catch (error) {
    res.status(StatusCodes);
  }
};
module.exports = getAllHistory;
