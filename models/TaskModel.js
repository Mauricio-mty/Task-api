//Model to bd postgresql

const {DataTypes}=require("sequelize");
const sequelize=require("../db");
const {v4:uuidv4}=require("uuid");

    const Task = sequelize.define("task",{
            id:{
                type:DataTypes.UUID,
                allowNull: false,
                defaultValue:uuidv4,
                primaryKey:true,
            },
            title:{
                type:DataTypes.STRING,
                allowNull: false,
            },
            description:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            done:{
                type:DataTypes.BOOLEAN,
                defaultValue:false,
                allowNull:false,
            },
            creation_date:{ 
                type:DataTypes.DATEONLY,
                allowNull: false,
                defaultValue:DataTypes.NOW,
            },

    });

    module.exports=Task;