const Coment = require("./ComentsModel");
const Task = require("./TaskModel");
const User = require("./UserModel");
const UserRole = require("./UserRoleModel");
const Tag = require("../models/TagModel");
const tagXtask = require("./tagXtaskModel");
/*-------Relacion Coments--------- */
//User & Coment
User.hasMany(Coment,{foreignKey:"user_id"});
Coment.belongsTo(User,{foreignKey:"user_id"});

//Task & Coment
Task.hasMany(Coment,{foreignKey:"task_id"});
Coment.belongsTo(Task,{foreignKey:"task_id"});

//Role & User
UserRole.hasMany(User,{foreignKey:"userRoleId"});
User.belongsTo(UserRole,{foreignKey:"userRoleId"});

Task.belongsToMany(,{

})







module.exports={User,Task,Coment};