const  express = require('express');
const router= express.Router();
const controller= require("../controllers/UserController");

router.post("/",controller.NewUser);
router.get("/",controller.getAllUsers);
router.get("/:id",controller.getByid);
router.delete("/:id",controller.deleteUser);
router.put("/:id",controller.updateUser);



module.exports=router;