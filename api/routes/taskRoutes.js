const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const {
  createTask,
  deleteTask,
  updateTask,
  addComment,
} = require("../controllers/taskController");

const taskRoutes = express.Router();

taskRoutes.route("/:projectId").post(verifyToken, createTask);
taskRoutes
  .route("/:taskId")
  .delete(verifyToken, deleteTask)
  .put(verifyToken, updateTask);
taskRoutes.route("/:taskId/comment").put(verifyToken, addComment);

module.exports = taskRoutes;
