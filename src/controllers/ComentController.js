const ComentService = require('../service/ComentService');

// Create a new comment
exports.newComment = async (req, res) => {
    try {
        const comment = await ComentService.createComment(req.body);
        res.status(201).json(comment);
    } catch (e) {
        // Personalizar el mensaje de error basado en el tipo de error
        if (e.message === "User not found" || e.message === "Task not found") {
            return res.status(404).json({ message: e.message });
        }
        res.status(500).json({ error: "Error creating the comment" });
    }
};

// Get all comments
exports.getComents = async (req, res) => {
    try {
        const list = await ComentService.getAllComments();
        res.status(200).json(list);
    } catch (e) {
        res.status(500).json({ error: "Internal error", message: e.message });
    }
};

// Update a comment
exports.updateComent = async (req, res) => {
    try {
        const data = await ComentService.updateComment(req.params.id, req.body.content);
        if (!data) return res.status(404).json({ error: "Comment not found" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error updating the comment" });
    }
};

// Delete a comment
exports.deleteComent = async (req, res) => {
    try {
        const data = await ComentService.deleteComment(req.params.id);
        if (!data) return res.status(404).json({ error: "Comment not found" });
        // El servicio ya devuelve el formato correcto
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error deleting the comment" });
    }
};
