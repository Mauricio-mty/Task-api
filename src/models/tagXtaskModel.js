const {DataTypes} = require("sequelize");
const {v4:uuidv4}= require("uuid");
const sequelize = require("../config.db");

const tag= require("./TagModel");
const task= require("./TaskModel")

const tagXtask= sequelize.define('tag_x_task',{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        defaultValue:uuidv4,
        primarykey:true,
    },
    task_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:task,
            key:'id',
        },

    },
    tag_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:tag,
            key:'id',
        },

    },
},{
  indexes: [
    {
      unique: true,
      fields: ['task_id', 'tag_id'], // <--- Esta es la clave
    }
  ]
 }
);


module.exports=tagXtask;