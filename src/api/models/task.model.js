const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title:       { 
    type: String, 
    required: true
},
  description: { 
    type: String, 
    required:  false
},
  status:      { 
    type: String, 
    enum: ['pending', 'in-progress', 'completed'], 
    default: 'pending' 
},
  owner:       { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  sharedWith:  [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
}],
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
