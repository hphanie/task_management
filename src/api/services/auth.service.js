const UserModel = require('../models/user.model');  
const jwt       = require('jsonwebtoken');
const { comparePassword } = require('../utils/password.helper');

exports.registerUser = async ({ fullname, username, email, password, phone }) => {
  const exists = await UserModel.findOne({ email });
  if (exists) throw new Error('Email déjà utilisé');

  const user = new UserModel({ fullname, username, email, password, phone });
  await user.save();

  return { message: 'Utilisateur créé' };
};

exports.loginUser = async ({ email, password }) => {

const user = await UserModel.findOne({ email });
  if (!user){
    throw new Error('Identifiants invalides');
  } 

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    throw new Error('Identifiants invalides');
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  return { token };
};
