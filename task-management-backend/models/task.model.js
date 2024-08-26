const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
    status: { type: String, enum: ['to-do', 'in-progress', 'completed'], default: 'to-do' },
    history: { type: [String], default: [] },
});

module.exports = mongoose.model('Task', taskSchema);