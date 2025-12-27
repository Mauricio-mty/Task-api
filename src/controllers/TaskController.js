const TaskService = require('../service/TaskService');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error', ex: e.message });
    }
};

// Create a new task
exports.newTask = async (req, res) => {
    try {
        const newTask = await TaskService.createTask(req.body);
        res.status(201).json(newTask);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Get a specific task by id
exports.getTask = async (req, res) => {
    try {
        const task = await TaskService.getTaskById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update task state
exports.updateStateTask = async (req, res) => {
    try {
        const task = await TaskService.updateTask(req.params.id, req.body);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json(task);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await TaskService.deleteTask(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json({ "task eliminado": task });
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
