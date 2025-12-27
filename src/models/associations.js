const Coment = require("./ComentsModel")
const Task = require("./TaskModel")
const User = require("./UserModel")

/*-------Relacion Coments--------- */
//User & Coment
User.hasMany(Coment,{foreignKey:"user_id"});
Coment.belongsTo(User,{foreignKey:"user_id"});

//Task & Coment
Task.hasMany(Coment,{foreignKey:"task_id"});
Coment.belongsTo(Task,{foreignKey:"task_id"});



module.exports={User,Task,Coment};