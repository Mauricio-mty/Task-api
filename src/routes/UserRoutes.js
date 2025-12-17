const validate = require("../middleware/validate")
const  express = require('express');
const router= express.Router();
const controller = require("../controllers/UserController");
const createuser = require("../schema/User.schema");


router.post("/",validate(createuser),controller.create);
//router.get("/",controller.getAllUsers);
//router.get("/:id",controller.getByid);
//router.delete("/:id",controller.deleteUser);
//router.put("/:id",controller.updateUser);



module.exports=router;