const taskService = require('../services/task.service');

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks(req);
    res.json(tasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req);
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await taskService.deleteTask(req);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const task = await taskService.updateStatus(req);
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const shareTask = async (req, res) => {
  try {
    const task = await taskService.shareTask(req);
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  updateStatus,
  shareTask
};
