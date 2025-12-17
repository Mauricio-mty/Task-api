const User = require("../service/UserService");

//new user function
exports.create=async(req,res)=>{
    try{
      const new_user= await User.creatreUser(req.body);
      res.status(201).json(new_user);
    }catch(e){
      res.status(500).json({error:e.message});
    }
}

/*
//get all users
exports.getAllUsers=async(req,res)=>{
    try{
       const data= await User.findAll();
       res.json(data);
    }catch(e){
        res.status(500).json({error:"Internal server Error",ex:e.message});
    }
}


//get one user
exports.getByid=async(req,res)=>{
  try {
    const data=await User.findByPk(req.params.id);
    if(!data)return res.status(404).json({Message:"Usuario no encontrado"});
    res.json(data);
  } catch (error) {
    res.status(500).json({error:error.message});
  }
}

///update user
exports.updateUser=async (req,res) => {
  try {
    const data=await User.findByPk(req.params.id);
    if(!data)return res.status(404).json({Message:"Usuario no encontrado"});
    await data.update(req.body);
    res.json(data);
  } catch (error) {
       res.status(500).json({error:e.message});
  }
}


//delete user
exports.deleteUser=async (req,res) => {
  try {
    const data= await User.findByPk(req.params.id);
    if(!data)return res.status(404).json({Message:"Usuario no encontrado"});
   await data.destroy();
    res.json({"User eliminado":data.body.id});
  } catch (error) {
    res.status(500).json({error:"Internal server error",m:error.Message});
  }
}*/