import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

// Create task
router.post("/", createTask);

// Get all tasks
router.get("/", getTasks);

// Update task by ID
router.put("/:id", updateTask);

// Delete task by ID
router.delete("/:id", deleteTask);

export default router;
