const tasksModel = require("../models/tasksModel");
const historyModel = require("../models/historyModel");
const { BadRequestError, InternalServerError } = require("../error");
const { StatusCodes } = require("http-status-codes");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksModel.find();
    res.status(StatusCodes.OK).json(tasks);
  } catch (error) {
    throw new InternalServerError(error);
  }
};
const getTaskById = async (req, res) => {
  try {
    const task = await tasksModel.findById(req.params.id);
    res.status(StatusCodes.OK).json(task);
  } catch (error) {
    throw new InternalServerError(error);
  }
};
const createTask = async (req, res) => {
  try {
    if (!req.body.name || !req.body.userID) {
      throw new BadRequestError("please fill all parameter in body!");
    }
    const newTask = await tasksModel.create(req.body);
    const newHistory = await historyModel.create({
      date: new Date(),
      typeOfModify: "created",
      userName: req.body.userID,
      taskName: newTask.name,
    });
    res.status(StatusCodes.CREATED).json(newTask);
  } catch (error) {
    throw new InternalServerError(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    if (!req.body.userID) {
      throw new BadRequestError("please send user id in body");
    }
    const deletedTask = await tasksModel.findByIdAndDelete(req.params.id);
    const newHistory = await historyModel.create({
      date: new Date(),
      typeOfModify: "deleted",
      userName: req.body.userID,
      taskName: deletedTask.name,
    });
    res.status(StatusCodes.OK).json(deletedTask);
  } catch (error) {
    throw new InternalServerError(error);
  }
};

const completeTask = async (req, res) => {
  try {
    if (!req.body.userID) {
      throw new BadRequestError("please send user id in body");
    }
    const completedTask = await tasksModel.findByIdAndUpdate(req.params.id, {
      completed: true,
    });
    const newHistory = await historyModel.create({
      date: new Date(),
      typeOfModify: "completed",
      userName: req.body.userID,
      taskName: completedTask.name,
    });
    res.status(StatusCodes.OK).json(completedTask);
  } catch (error) {
    throw new InternalServerError(error);
  }
};

const editTask = async (req, res) => {
  try {
    if (!req.body.userID) {
      throw new BadRequestError("please send user id in body");
    }
    const editedTask = await tasksModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    const newHistory = await historyModel.create({
      date: new Date(),
      typeOfModify: "edited",
      userName: req.body.userID,
      taskName: editedTask.name,
    });
  } catch (error) {}
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  completeTask,
  editTask,
  getTaskById,
};
