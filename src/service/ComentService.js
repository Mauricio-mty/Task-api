const Coment = require("../models/ComentsModel");
const Task = require("../models/TaskModel");
const User = require("../models/UserModel");

const ComentService = {};

// Function to create a new comment
ComentService.createComment = async (commentData) => {
    try {
        const userExists = await User.findByPk(commentData.user_id);
        if (!userExists) throw new Error("User not found");

        const taskExists = await Task.findByPk(commentData.task_id);
        if (!taskExists) throw new Error("Task not found");

        const newComment = await Coment.create(commentData);
        return newComment;
    } catch (error) {
        console.error("Error creating comment:", error.message);
        throw error;
    }
};

// Function to get all comments
ComentService.getAllComments = async () => {
    try {
        const comments = await Coment.findAll();
        return comments;
    } catch (error) {
        console.error("Error retrieving comments:", error);
        throw new Error("Error retrieving comments");
    }
};

// Function to update a comment
ComentService.updateComment = async (id, content) => {
    try {
        const comment = await Coment.findByPk(id);
        if (!comment) throw new Error("Comment not found");

        await comment.update({ content: content });
        return comment;
    } catch (error) {
        if (error.message !== "Comment not found") {
            console.error("Error updating comment:", error);
        }
        throw error;
    }
};

// Function to delete a comment
ComentService.deleteComment = async (id) => {
    try {
        const comment = await Coment.findByPk(id);
        if (!comment) throw new Error("Comment not found");

        const deletedComment = comment.get({ plain: true });
        await comment.destroy();
        return { "Comentario eliminado": deletedComment };
    } catch (error) {
        if (error.message !== "Comment not found") {
            console.error("Error deleting comment:", error);
        }
        throw error;
    }
};

module.exports = ComentService;
