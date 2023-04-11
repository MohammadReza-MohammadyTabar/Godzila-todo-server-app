const userModel = require("../models/usersModel");
const { InternalServerError, BadRequestError } = require("../error");
const { StatusCodes } = require("http-status-codes");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(StatusCodes.OK).json(users);
  } catch (error) {
    throw new InternalServerError(error);
  }
};

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    if (
      !req.body.name ||
      !req.body.age ||
      !req.body.github ||
      !req.body.linkedin ||
      !req.body.languages ||
      !req.body.skills ||
      !req.body.imageUrl
    ) {
      throw new BadRequestError("please fill all parameter in body!");
    }
    const newUser = userModel.create(req.body);
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (error) {
    throw new InternalServerError(error);
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    throw new InternalServerError(error);
  }
};
module.exports = { getAllUsers, createUser, getUserById };
