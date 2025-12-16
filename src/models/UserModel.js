
const {DataTypes}=require('sequelize');
const sequelize=require("../config/db");
 const {v4:uuidv4}=require("uuid"); 
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