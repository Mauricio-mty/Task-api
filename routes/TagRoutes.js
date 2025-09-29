const express=require("express");
const router=express.Router();
const controller=require("../controllers/TagController");

router.post("/",controller.newTag);
router.get("/",controller.getAllTags);
router.delete("/:id",controller.dropTag);


module.exports=router;