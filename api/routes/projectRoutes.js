const express = require("express");
const {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectInfo,
  addUserToProject,
} = require("../controllers/projectController");
const verifyToken = require("../middleware/authMiddleware");

const projectRoutes = express.Router();
projectRoutes
  .route("/")
  .post(verifyToken, createProject)
  .delete(verifyToken, deleteProject);

projectRoutes.get("/:id", verifyToken, getAllProjects);
projectRoutes.get("/:id", verifyToken, getProjectInfo);
projectRoutes.put("/addUser", verifyToken, addUserToProject);
module.exports = projectRoutes;
