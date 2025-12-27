const Task = require('../models/TaskModel');

const TaskService = {};

// Function to create a new task
TaskService.createTask = async (taskData) => {
    try {
        const newTask = await Task.create(taskData);
        return newTask;
    } catch (error) {
        console.error("Error creating task:", error);
        throw new Error("Error creating task");
    }
};

// Function to get all tasks
TaskService.getAllTasks = async () => {
    try {
        const tasks = await Task.findAll();
        return tasks;
    } catch (error) {
        console.error("Error retrieving tasks:", error);
        throw new Error("Error retrieving tasks");
    }
};

// Function to get one task by id
TaskService.getTaskById = async (id) => {
    try {
        const task = await Task.findByPk(id);
        if (!task) throw new Error("Task not found");
        return task;
    } catch (error) {
        // Evitar duplicar el log si el error es "Task not found"
        if (error.message !== "Task not found") {
            console.error("Error retrieving task:", error);
        }
        throw error; // Re-lanzar el error
    }
};

// Function to update a task
TaskService.updateTask = async (id, data) => {
    try {
        const task = await Task.findByPk(id);
        if (!task) throw new Error("Task not found");
        await task.update(data);
        return task;
    } catch (error) {
        if (error.message !== "Task not found") {
            console.error("Error updating task:", error);
        }
        throw error;
    }
};

// Function to delete a task
TaskService.deleteTask = async (id) => {
    try {
        const task = await Task.findByPk(id);
        if (!task) throw new Error("Task not found");
        const deletedTask = task.get({ plain: true });
        await task.destroy();
        return { "Task eliminado": deletedTask };
    } catch (error) {
        if (error.message !== "Task not found") {
            console.error("Error deleting task:", error);
        }
        throw error;
    }
};

module.exports = TaskService;
