const sequelize = require("../db")
const {DataTypes}=require("sequelize");
const {v4:uuidv4}=require("uuid");



const Tag=sequelize.define("tag",{
      id:{
        type:DataTypes.UUID,
        allowNull:false,
        defaultValue:uuidv4,
        primaryKey:true,
      },
      name:{
         type:DataTypes.STRING,
         allowNull:false,
      },
      color:{
        type:DataTypes.STRING,
         allowNull:true,
      },

})

module.exports=Tag