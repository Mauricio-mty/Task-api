const express=require("express");
const sequelize=require("./db");
require("./models/associations");//Importacion de asociaciones
const task= require("./routes/TaskRoutes");
const user = require("./routes/UserRoutes");
const tag = require("./routes/TagRoutes");
const coment=require("./routes/ComentRoutes");

const app = express();
app.use(express.json());

//conexion a bd
sequelize.authenticate()
    .then(()=>console.log("Conectado"))
    .catch(e=>console.error("No conectado",e));
//union con bd

sequelize.sync({force:false})//force: true borra y recrea tablas
    .then(()=>{
        console.log("Tabla sincronizada");
    })
    .catch(err=>{
        console.error("No se pudo sincronizar:",err);
    });

/*app.get("/",(req,res)=>{
    res.send("Api on air");
});*/

app.use("/task",task);
app.use("/user",user);
app.use("/tag",tag);
app.use("/coment",coment)

app.listen(3030,()=>console.log("Servidor en puerto 3030"));

