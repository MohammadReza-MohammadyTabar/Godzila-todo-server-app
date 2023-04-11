const { Router } = require("express");
const router = Router();
const {
  getAllTasks,
  createTask,
  editTask,
  completeTask,
  deleteTask,
  getTaskById,
} = require("../controllers/taskController");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(editTask).get(getTaskById);
router.route("/complete/:id").post(completeTask);

module.exports = router;
