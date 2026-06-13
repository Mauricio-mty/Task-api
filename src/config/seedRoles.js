const UserRole = require("../models/UserRoleModel");

/**
 * Asegura que exista un rol "ADMIN" en la tabla de roles.
 * Devuelve el registro y un booleano indicando si fue creado.
 */
const ensureAdminRole = async () => {
  try {
    const [role, created] = await UserRole.findOrCreate({
      where: { role: "admin" },
      defaults: { role: "admin" },
    });

    if (created) {
      console.log("Rol admin creado por defecto");
    } else {
      console.log("Rol admin ya existe");
    }

    return { role, created };
  } catch (err) {
    console.error("Error asegurando rol admin:", err);
    throw err;
  }
};

module.exports = { ensureAdminRole };