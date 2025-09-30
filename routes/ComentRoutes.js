
const express= require("express");
const router=express.Router();
const controller= require("../controllers/ComentController");


router.post("/",controller.newComment);
router.get("/",controller.getComents);
router.get("/:id",controller.updateComent);
router.delete("/:id",controller.deleteComent);

module.exports=router;