
const {DataTypes}=require('sequelize');
const sequelize=require("../config/db");
 const {v4:uuidv4}=require("uuid"); 
 const userRole=require("./UserRoleModel");
//const uuid = require("uuid");

const User=sequelize.define("user",{
       id:{
         type:DataTypes.UUID,
         allowNull:false,
         defaultValue:uuidv4,
         primaryKey:true,
       },
       username:{
        type:DataTypes.STRING,
        allowNull:false,
       },
       userRoleId:{
        type:DataTypes.UUID,
        references:{
         model:userRole,
         key:'id',
        },
       },
       email:{
        type:DataTypes.STRING,
        allowNull:false,
       },
       password_hash:{
        type:DataTypes.STRING,
        allowNull:false,
       },
       created_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        defaultValue:DataTypes.NOW,
       },

})

module.exports=User;