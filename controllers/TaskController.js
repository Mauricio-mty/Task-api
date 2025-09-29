const Task = require("../models/TaskModel");


//get all
exports.getAllTasks=async(req,res)=>{
    try{ 
        const all = await Task.findAll();
        res.json(all);
    }catch(e){
        res.status(500).json({error:'Internal Server Error',ex:e.message});
    }
};

//new task
exports.newTask = async(req,res)=>{
    try{
        const new_task=await Task.create(req.body);
        res.status(201).json(new_task);
    }catch(e){
        res.status(500).json({error:e.message});
    }

};

//find specficif task by id 
exports.getTask=async(req,res)=>{
    try{
        const task = await Task.findByPk(req.params.id);
          if (task) {
            res.json(task);
            } else {
            res.status(404).json({ error: 'Task not found' });
            }

    }catch(e){
         res.status(500).json({ error: 'Internal Server Error' });
    }
}

//task state change
exports.updateStateTask= async(req,res)=>{
    try{
     const task= await Task.findByPk(req.params.id);
     if(!task) return res.status(404).json({error:"Task not found"});
     
     await task.update(req.body);
     res.json(task);

    }catch(e){
        res.status(500).json({error:e.message});
    }
} 


//Delete task function

exports.deleteTask = async (req,res)=>{
    try{
      const task = await Task.findByPk(req.params.id);
      if(!task) return res.status(404).json({error:"Task not found"});
     
      await task.destroy();
      res.json({ "task eliminado":task.body.id });
    }catch(e){
       res.status(500).json({ error: 'Internal Server Error' });
    }
}
