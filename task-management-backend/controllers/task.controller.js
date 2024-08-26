const Task = require('../models/task.model');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    const { title, description, dueDate, priority } = req.body;
    const task = new Task({ title, description, dueDate, priority });
    try {
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
