const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");
const Project = require("../models/projectModel");

/*
 * @desc    Create a new task
 * @route   POST /api/task/:projectId
 * @access  Private
 */
module.exports.createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const { projectId } = req.params;
  if (!title || !projectId) {
    return res.status(400).json({
      status: "false",
      message: "Invalid task data",
    });
  }
  const existingTask = await Task.findOne({ title: title });
  if (existingTask) {
    return res.status(400).json({
      status: "false",
      message: "Task already exists",
    });
  }
  const task = await Task.create({
    title,
    description,
    projectId,
  });
  if (task) {
    return res.status(201).json({
      status: "true",
      message: "Task created successfully",
    });
  } else {
    return res.status(400).json({
      status: "false",
      message: "Something is wrong",
    });
  }
});

/*
 * @desc    Delete a task
 * @route   DELETE /api/task/:taskId
 * @access  Private
 */
module.exports.deleteTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  try {
    await Task.findByIdAndDelete(taskId);
    return res.status(200).json({
      status: "true",
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "false",
      message: "Invalid task data",
    });
  }
});

/*
 * @desc    Update a task
 * @route   PUT /api/task/:taskId
 * @access  Private
 * */
module.exports.updateTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const { description, status, progress } = req.body;
  console.log(req.body);
  try {
    const task = await Task.findById(taskId);
    task.description = description || task.description;
    task.status = status || task.status;
    task.progress = progress || task.progress;
    await task.save();
    return res.status(200).json({
      status: "true",
      message: "Task updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "false",
      message: "Invalid task data",
    });
  }
});

/*
 * @desc    add comment to a task
 * @route   PUT /api/task/:taskId/comment
 * @access  Private
 * */
module.exports.addComment = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const { comment } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      taskId,
      { $push: { comments: comment } },
      { new: true }
    );
    return res.status(200).json({
      status: "true",
      message: "Comment added successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "false",
      message: error.message,
    });
  }
});
