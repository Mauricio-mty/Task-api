const express = require('express');
const validate = require('../middleware/validate');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const loginSchema = require('../schema/Login.schema');
/**
 * @route   POST /login
 * @desc    Autentica a un usuario y le devuelve un token JWT.
 * @access  Public
 */
router.post('/',validate(loginSchema),authController.login);

/**
 * @route   POST /login/verify
 * @desc    Verifica si un token JWT proporcionado es válido.
 * @access  Private
 * @uses    authMiddleware - Este middleware se encarga de toda la lógica de validación.
 */
router.post('/verify', authMiddleware, (req, res) => {
  // Si el middleware `authMiddleware` se ejecuta y llega hasta aquí, significa que el token
  // es completamente válido (firma correcta y no ha expirado).
  // Por lo tanto, podemos simplemente devolver una respuesta de éxito.
  res.status(200).json({ message: 'El token es válido' });
});

module.exports = router;
