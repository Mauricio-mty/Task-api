const express=require("express");
const router=express.Router();
const controller=require("../controllers/TagController");

router.post("/",controller.newTag);
router.get("/",controller.getAllTags);
router.delete("/:id",controller.dropTag);
router.put("/:id",controller.updateTag);
router.get("/:id",controller.oneTag);


module.exports=router;