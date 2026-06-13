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
        const user = await User.findOne({where:{email:email}}); 
        return {user};
    }catch(e){
        console.error("Error retrieving user by email:", e);
      throw new Error("Error retrieving user by email");
    }
}

UserService.getOneUser= async(id)=>{
    try {
        const data = await User.findByPk(id);
        return {message:"User found",data};
    } catch (error) {
        throw new Error("Error retrieving user");
        //res.status(500).json({error:e.message});
    }
}

//Get all users functions
UserService.AllUsers=async()=>{
    try {
        const data = await User.findAll();
        return data;
    } catch (error) {
        res.status(500).json({error:"Internal server Error",ex:e.message});
    }
}

UserService.updateUser=async(id_User,updateData)=>{
    try {
        const user = await User.findByPk(id_User);    
        if(!user){throw new Error("User not found");}

        if(updateData.password_hash){
            updateData.password_hash= await bcrypt.hash(updateData.password_hash,12);
        }

        await user.update(updateData);
        return user;
        
    }catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Error updating user");
    }
}

//Delete function
UserService.deleteRegister=async(id_User)=>{
    try {
            const user=await User.findByPk(id_User);
                    if(!user) {
                                throw new Error("User not found");
                                        }
                                                const deleteUser=user.get({plain:true});
                                                        await user.destroy();
                                                                res.json({"User eliminado":deleteUser});
                                                                    } catch (error) {
                                                                            console.error("Error deleting user:", error);
                                                                                    throw new Error("Error deleting user");
                                                                                        }
                                                                                        }


module.exports = UserService;



