const Tag = require("../models/TagModel");

//new tag
exports.newTag=async(req,res)=>{
    try{
       const new_tag= await Tag.create(req.body);
       res.status(201).json(new_tag);
    }catch(e){
         res.status(500).json({error:e.message});
    }
}


//list tags
exports.getAllTags=async(req,res)=>{
   try {
    const list= await Tag.findAll();
    res.json(list);
   } catch (error) {
    res.status(500).json({error:"Internal Server error"});
   }
}

//get one tag
exports.oneTag=async (req,res) => {
   try {
      const data = await Tag.findByPk(req.params.id);
      if(!data)return res.status(404).json({error:"Task not found"});
      res.json(data);

   } catch (error) {
      res.status(500).json({error:"Internal Server error"});
   }
}

//update tag
exports.updateTag=async (req,res) => {
   try {
      const data = await Tag.findByPk(req.params.id);
      if(!data)return res.status(404).json({error:"Task not found"});
      
      await data.update(req.body);
      res.json(date);
      
   } catch (error) {
      res.status(500).json({error:"Internal Server error"});
   }
}


//drop tag
exports.dropTag=async(req,res)=>{
   try{
      const to_drop = await Tag.findByPk(req.params.id);
      if(!to_drop)return res.status(404).json({message:"Etiqueta no encontrada"});
      await to_drop.destroy();
      res.status(204).json({message:"etiqueta eliminada",to_drop});
   }catch(e){ 
      res.status(500).json({message:"Error al eliminar",error:e.message});
   }
}


