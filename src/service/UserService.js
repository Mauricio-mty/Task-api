const User = require("../models/UserModel");
const sequelize = require("../config/db");
const bcrypt = require("bcryptjs");


const UserService = {};

//Function to create new user
UserService.creatreUser = async (userData) => {
    try {
        const hash = await bcrypt.hash(userData.password_hash,12);
        const newUser = await User.create({...userData,password_hash:hash});
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Error creating user");
    }
}

//Function to found user by email , return element of db 
UserService.getUserByEmail= async(email)=>{
    try{
        const user = await User.findOne({where:{email}});
        if(!user) return res.status(404).json({message:"User not found"}); 
        return user;
    }catch(e){
        res.status(500).json({error:e.message});
    }
}

UserService.AllUsers=async()=>{
    try {
        const data = await User.findAll();
        return data;
    } catch (error) {
        res.status(500).json({error:"Internal server Error",ex:e.message});
    }
}

UserService.delete=async(id_User)=>{
    try {
        const user=await User.findByPk(id_User);
        if(!user) return res.status(404).json({Message:"Usuario no encontrado"});
        await data.destroy();
        res.json({"User eliminado":user.body.id});
    } catch (error) {
        res.status(500).json({error:"Internal server error",m:error.Message});
    }
}


module.exports = UserService;



