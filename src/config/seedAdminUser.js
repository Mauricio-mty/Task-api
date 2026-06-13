const User = require("../service/UserService");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const UserRole = require("../models/UserRoleModel");


const firstUser = async()=>{
    try {
        const role = await UserRole.findOne({where:{role:"admin"}});
        const hash = await bcrypt.hash("admin123",12);
        const adminUser = {
            username:"Admin",
            email:"admin@mail.com",
            password_hash:hash,
            userRoleId:role.id,
        }
        const user = await User.creatreUser(adminUser);
        return user;
    } catch (error) {
        console.erroe("Error creating first admin user:",error);
        throw new Error("Error creating first admin user",error);
    }
}

module.exports = {firstUser};