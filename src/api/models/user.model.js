const mongoose = require('mongoose');
const { Schema } = mongoose;
const { hashPassword } = require('../utils/password.helper');

const userSchema = new Schema({
  fullname: { 
    type: String, 
    required: false 
},
  username: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
},
  email:    { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
},
  password: { 
    type: String, 
    required: true 
},
    phone:    { 
    type: String, 
    required: false 
},

  friends:  [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
}],
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')){
    return next();
  } 
  this.password = await hashPassword(this.password);
  next();
});

module.exports = mongoose.model('User', userSchema);
