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
  
  router.post("/register", validate(registerSchema), register);

  router.post("/login", validate(loginSchema), login);
  
  module.exports = router;
  