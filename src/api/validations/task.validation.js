const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().optional(),
  dueDate: Joi.date().optional(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
});

const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  description: Joi.string().optional(),
  dueDate: Joi.date().optional(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
});

module.exports = { createTaskSchema, updateTaskSchema };
