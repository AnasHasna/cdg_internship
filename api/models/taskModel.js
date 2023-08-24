const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    description: String,
    status: {
      type: String,
      enum: ["attente", "développement", "terminé"],
      default: "attente",
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    comments: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
