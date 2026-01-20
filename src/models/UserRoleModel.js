
const {DataTypes}=require('sequelize');
const sequelize=require("../config/db");
 const {v4:uuidv4}=require("uuid"); 
//const uuid = require("uuid");

const UserRole=sequelize.define("userRole",{
       id:{
         type:DataTypes.UUID,
         allowNull:false,
         defaultValue:uuidv4,
         primaryKey:true,
       },
       role:{
        type:DataTypes.STRING,
        allowNull:false,
       }

})

module.exports=UserRole;