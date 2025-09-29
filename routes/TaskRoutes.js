const express = require('express');
const router = express.Router();
const controller= require("../controllers/TaskController");

router.get("/",controller.getAllTasks);
router.post("/",controller.newTask);
router.get("/:id",controller.getTask); 
router.put("/:id",controller.updateStateTask);
router.delete("/:id",controller.deleteTask);

module.exports = router;