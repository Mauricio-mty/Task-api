const Coment = require("../models/comentsModel")
const Task = require("../models/TaskModel")
const User = require("../models/UserModel")

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