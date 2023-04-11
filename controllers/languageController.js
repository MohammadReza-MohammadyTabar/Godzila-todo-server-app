const { StatusCodes } = require("http-status-codes");
const languageModel = require("../models/lnaguageModel");

const getAllLanguages = async (req, res) => {
  try {
    const languages = await languageModel.find();
    res.status(StatusCodes.OK).json(languages);
  } catch (error) {
    throw new InternalServerError(error);
  }
};

const addLanguage = async (req, res) => {
  try {
    const newLanguage = await languageModel.create(req.body);
    res.status(StatusCodes.CREATED).json(newLanguage);
  } catch (error) {
    throw new InternalServerError(error);
  }
};
module.exports = { getAllLanguages, addLanguage };
