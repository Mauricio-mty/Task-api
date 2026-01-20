const validate = require("../middleware/validate")
const  express = require('express');
const router= express.Router();
const controller = require("../controllers/UserRoleController");



router.post("/",controller.newRole);
router.get("/",controller.getAllRole);
router.get("/:id",controller.getRole);
router.delete("/:id",controller.deleteRole);
router.put("/:id",controller.updateStateRole);



module.exports=router;