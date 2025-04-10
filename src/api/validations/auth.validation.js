const Joi = require('joi');

const registerSchema = Joi.object({
  fullname: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().optional(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = { registerSchema, loginSchema };
