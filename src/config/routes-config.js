const express = require("express");

// Importación de las diferentes rutas de la aplicación
const Login = require("../routes/Login");
const task = require("../routes/TaskRoutes");
const user = require("../routes/UserRoutes");
const tag = require("../routes/TagRoutes");
const coment = require("../routes/ComentRoutes");

// Importación de middlewares
const corsM = require("../middleware/cors");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * Función para configurar y registrar todas las rutas y middlewares principales de la aplicación.
 * @param {object} app - La instancia de la aplicación Express.
 */
const configRoutes = (app) => {
    // Middleware de CORS para permitir peticiones desde otros orígenes.
    app.use(corsM);
    // Middleware para parsear el cuerpo de las peticiones a formato JSON.
    app.use(express.json());

    // --- Rutas Públicas ---
    // La ruta de login es pública, ya que es el punto de entrada para obtener un token.
    // No se le aplica el `authMiddleware` de forma global antes de su definición.
    app.use("/login", Login);

    // --- Middleware de Autenticación Global ---
    // A partir de este punto, todas las rutas definidas a continuación
    // requerirán un token JWT válido porque `authMiddleware` se aplica a ellas.
    app.use(authMiddleware);

    // --- Rutas Protegidas ---
    // Todas estas rutas están protegidas y solo serán accesibles con un token válido.
    app.use("/task", task);
    app.use("/user", user);
    app.use("/tag", tag);
    app.use("/coment", coment);
}

module.exports = configRoutes;
