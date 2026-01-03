import Task from "../models/Task.js";


/*CREATE TASK */

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); 
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



/*  GET ALL TASKS */
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ dueDate: 1 }); 
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/*  UPDATE TASK */
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true }); 
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


/*  DELETE TASK  */
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
