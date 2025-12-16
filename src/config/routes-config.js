const express = require("express");

const task= require("../routes/TaskRoutes");
const user = require("../routes/UserRoutes");
const tag = require("../routes/TagRoutes");
const coment=require("../routes/ComentRoutes");

const configRoutes=(app)=>{
    app.use(express.json());

    app.use("/task",task);
    app.use("/user",user);
    app.use("/tag",tag);
    app.use("/coment",coment);

}

module.exports=configRoutes;
