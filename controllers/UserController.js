const User = require("../models/UserModel");

//new user function
exports.NewUser=async(req,res)=>{
    try{
      const new_user= await User.create(req.body);
      res.status(201).json(new_user);

    }catch(e){
      res.status(500).json({error:e.message});
    }
}

//get all users
exports.getAllUsers=async(req,res)=>{
    try{
       const data= await User.findAll();
       res.json(data);
    }catch(e){
        res.status(500).json({error:"Internal server Error",ex:e.message});
    }
}