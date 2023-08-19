const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");

/**
 * @desc    Create a new project
 * @route   POST /api/project
 * @access  Private
 */
module.exports.createProject = asyncHandler(async (req, res) => {
  const { name, description, userId } = req.body;
  const listedProject = await Project.findOne({ name: name });
  if (listedProject) {
    return res.status(400).json({
      status: "false",
      message: "Project already exists",
    });
  }
  const usersId = [];
  usersId.push(userId);
  const key = Math.floor(Math.random() * 1000000);
  const project = await Project.create({
    name,
    description,
    key: key,
    usersId: usersId,
  });

  if (project) {
    return res.status(201).json({
      status: "true",
      message: "Project created successfully",
    });
  } else {
    return res.status(400).json({
      status: "false",
      message: "Invalid project data",
    });
  }
});

/**
 * @desc    Delete a project
 * @route   DELETE /api/project
 * @access  Private
 */
module.exports.deleteProject = asyncHandler(async (req, res) => {
  const { key } = req.body;
  try {
    const project = await Project.findOneAndDelete({ key: key });
    return res.status(200).json({
      status: "true",
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "false",
      message: "Invalid project data",
    });
  }
});

/**
 * @desc    Get all projects
 * @route   GET /api/project
 * @access  Private
 */
module.exports.getAllProjects = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const projects = await Project.find({ usersId: userId });
  if (projects) {
    return res.status(200).json({
      status: "true",
      message: "Projects retrieved successfully",
      data: projects,
    });
  } else {
    return res.status(400).json({
      status: "false",
      message: "Wrong data",
    });
  }
});

/**
 * @desc    Get project Info
 * @route   GET /api/project/:id
 * @access  Private
 * @param    id
 * */
module.exports.getProjectInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id).populate({
    path: "usersId",
    select: "fullName",
  });
  if (project) {
    return res.status(200).json({
      status: "true",
      message: "Project retrieved successfully",
      data: project,
    });
  } else {
    return res.status(400).json({
      status: "false",
      message: "Wrong data",
    });
  }
});

/**
 * @desc    Add user to project
 * @route   POST /api/project/addUser
 * @access  Private
 * */
module.exports.addUserToProject = asyncHandler(async (req, res) => {
  const { userId, key } = req.body;
  const project = await Project.findOne({ key: key });
  if (project) {
    if (project.usersId.includes(userId)) {
      return res.status(400).json({
        status: "false",
        message: "User already exists in this project",
      });
    }
    project.usersId.push(userId);
    await project.save();
    return res.status(200).json({
      status: "true",
      message: "User added successfully",
    });
  } else {
    return res.status(400).json({
      status: "false",
      message: "Wrong data",
    });
  }
});
