const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
  } = require("../controllers/task.controller");
  
  const express = require("express");
  const router = express.Router();
  
  const taskSchema = require("../validations/task.validation");
  const validate = require("../middlewares/validate");
  const { requireAuth } = require("../middlewares/authMiddleware");
  
  router.use(requireAuth);
  
  router.get("/", (req, res) => getAllTasks(req, res));
  router.post("/", validate(taskSchema), (req, res) => createTask(req, res));
  router.put("/:id", (req, res) => updateTask(req, res));
  router.delete("/:id", (req, res) => deleteTask(req, res));
  
  module.exports = router;
  
  