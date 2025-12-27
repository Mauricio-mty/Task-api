const Tag = require("../service/TagService");

//new tag
exports.newTag=async(req,res)=>{
    try{
      const new_tag= await Tag.createTag(req.body);
      res.status(201).json(new_tag);
    }catch(e){
         res.status(500).json({error:e.message});
    }
}


//list tags
exports.getAllTags=async(req,res)=>{
   try { 
      const data= await Tag.getAll();
      res.json(data);
   
   } catch (error) {
    res.status(500).json({error:"Internal Server error"});
   }
}

//get one tag
exports.oneTag=async (req,res) => {
   try {
      const data= await Tag.getOneTag(req.params.id);
      res.status(200).json(data);
      

   } catch (error) {
      res.status(500).json({error:"Internal Server error"});
   }
}

//update tag
exports.updateTag=async (req,res) => {
   try {
      
      const updatedTag= await Tag.updateTag(req.params.id,req.body);
      res.status(200).json(updatedTag);
   } catch (error) {
      res.status(500).json({error:"Internal Server error"});
   }
}


//drop tag
exports.dropTag=async(req,res)=>{
   try{

      const deletedTag = await Tag.deleteTag(req.params.id);
      res.status(200).json(deletedTag);
   }catch(e){ 
      res.status(500).json({message:"Error al eliminar",error:e.message});
   }
}


