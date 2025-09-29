const  express = require('express');
const router= express.Router();
const controller= require("../controllers/UserController");

router.post("/",controller.NewUser);
router.post("/",controller.getAllUsers);



module.exports=router;