const express=require("express");
const sequelize=require("./db");
require("./models/associations");//Importacion de asociaciones
const task= require("./routes/TaskRoutes");
const user = require("./routes/UserRoutes");
const tag = require("./routes/TagRoutes");
const coment=require("./routes/ComentRoutes");

const app = express();
app.use(express.json());

/*app.get("/",(req,res)=>{
    res.send("Api on air");
});*/

app.use("/task",task);
app.use("/user",user);
app.use("/tag",tag);
app.use("/coment",coment)

// Function to initialize database
const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado");
        await sequelize.sync({force:false});
        console.log("Tabla sincronizada");
    } catch (err) {
        console.error("Error initializing DB:", err);
    }
};

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
    initDB().then(() => {
        app.listen(3030,()=>console.log("Servidor en puerto 3030"));
    });
}

module.exports = app;

