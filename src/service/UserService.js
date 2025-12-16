const User = require("../models/UserModel");
const sequelize = require("../config/db");
const bcrypt = require("bcryptjs");

const UserService = {};

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
module.exports = UserService;


