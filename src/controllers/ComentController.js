const Coment = require("../models/ComentsModel");
const Task = require("../models/TaskModel");
const User = require("../models/UserModel")

//new Comment
exports.newComment=async(req,res)=>{
    try{
    const userValidate= await User.findByPk(req.body.user_id);
    const taskValidate=await Task.findByPk(req.body.task_id);
    
    if(!userValidate)return res.status(404).json({message:"Usuario no encontrado"});
    if(!taskValidate)return res.status(404).json({message:"Tarea no encontrada"});
    const coment=await Coment.create(req.body);
    res.status(201).json(coment);    

    }catch(e){
       res.status(500).json({error:"Error al crear el comentario"});
    }
}



//all coments
exports.getComents=async(req,res)=>{
    try{
        const list= await Coment.findAll();
        res.status(200).json(list);
    }catch(e){
       res.status(500).json({error:"Error interno",messa:e.message});
    }
}

//update coment
exports.updateComent=async(req,res)=>{
    try {
        const data= await Coment.findByPk(req.params.id);
        if(!data) return res.status(404).json({error:"Task not found"});
        await data.update({content:req.body.content});
        res.json(data);
    } catch (error) {
          res.status(500).json({error:"Error al actualizar el comentario"});
    }
}


//delete coment
exports.deleteComent=async(req,res)=>{
    try {
        const data= await Coment.findByPk(req.params.id);
        if(!data) return res.status(404).json({error:"Task not found"});
        await data.destroy();
        res.json({"Comentario eliminado":data.body.id});
    } catch (error) {
        res.status(500).json({error:"Error al eliminar el comentario"});
    }
}