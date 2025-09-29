const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("task_bd","hermel","h33r#M91",{
    host:"localhost",
    port:5001,
    dialect:"postgres",              
});

module.exports=sequelize;