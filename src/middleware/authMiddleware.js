const jwt = require('jsonwebtoken');

/**
 * Middleware para proteger rutas que requieren autenticación.
 * Verifica la presencia y validez de un token JWT en la cabecera de autorización.
 */
module.exports = (req, res, next) => {
    // Intenta obtener el token de la cabecera 'Authorization'.
    // El formato esperado es "Bearer [token]".
    const token = req.headers['authorization']?.split(' ')[1];

    // Si no se proporciona ningún token, devuelve un error 403 (Forbidden).
    if (!token) return res.status(403).json({ error: 'Token requerido. Acceso denegado.' });

    try {
        // Verifica el token utilizando el secreto almacenado en las variables de entorno.
        // jwt.verify() comprueba tanto la firma como la fecha de expiración del token.
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Si el token es válido, el payload decodificado (con datos del usuario) se añade al objeto 'req'.
        // Esto permite que los siguientes middlewares o controladores accedan a la información del usuario.
        req.user = decoded;

        // Pasa al siguiente middleware o controlador en la cadena.
        next();
    } catch (error) {
        // Si jwt.verify() falla (porque el token es inválido, ha expirado, etc.),
        // captura el error y devuelve un 401 (Unauthorized).
        return res.status(401).json({ error: 'Token inválido o expirado.' });
    }
}
