const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: Date,
}, {
  timestamps: true, // createdAt / updatedAt
});

module.exports = mongoose.model('Task', taskSchema);
