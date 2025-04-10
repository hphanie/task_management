const {
    register,
    login
  } = require("../controllers/auth.controller");
  
  const express = require("express");
  const router = express.Router();
  
  const {
    registerSchema,
    loginSchema
  } = require("../validations/auth.validation");
  
  const validate = require("../middlewares/validate");
  
  router.post("/register", validate(registerSchema), (req, res) => register(req, res));
  router.post("/login", validate(loginSchema), (req, res) => login(req, res));
  
  module.exports = router;
  