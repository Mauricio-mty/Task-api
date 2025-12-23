const express=require("express");
const sequelize=require("./src/config/db");
require("./src/models/associations");//Importacion
const configRoutes=require("./src/config/routes-config");
const app = express();


configRoutes(app);


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
        app.listen(3030,'0.0.0.0',()=>console.log("Servidor en puerto 3030"));
    });
}

module.exports = app;

