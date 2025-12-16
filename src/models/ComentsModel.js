const {DataTypes}= require("sequelize");
const sequelize = require( "../config/db" );
const {v4:uuidv4}=require("uuid");
const task = require("./TaskModel");
const user=require("./UserModel");



const Coment=sequelize.define("coments",{
    id:{
        type:DataTypes.UUID,
        defaultValue:uuidv4,
        allowNull:false,
        primaryKey:true,
    },
    task_id:{
        type:DataTypes.UUID,
        references:{
         model:task,
         key:'id',
        },
    },
    user_id:{
        type:DataTypes.UUID,
        references:{
         model:user,
         key:'id',
        },
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    created_at:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        defaultValue:DataTypes.NOW,
    },

}) ;

module.exports=Coment;

