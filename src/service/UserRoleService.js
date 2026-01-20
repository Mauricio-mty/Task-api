const Role = require("../models/UserRoleModel");
const sequelize = require("../config/db");


const UserRoleService = {};

//Function to create new role
UserRoleService.creatreRole = async (Data) => {
    try {
        const newRole = await Role.create({ Data });
        return newRole;
    } catch (error) {
        console.error("Error creating role:", error);
        throw new Error("Error creating role");
    }
}

//Function to found role by email , return element of db 
UserRoleService.getRoleByName = async (role) => {
    try {
        const role = await Role.findOne({ where: { role } });
        if (!role) return res.status(404).json({ message: "Role not found" });
        return role;
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

UserRoleService.getOneRole = async (id) => {
    try {
        const data = await Role.findByPk(id);
        return { message: "Role found", data };
    } catch (error) {
        throw new Error("Error retrieving role");
        //res.status(500).json({error:e.message});
    }
}

//Get all users functions
UserRoleService.AllUsers = async () => {
    try {
        const data = await Role.findAll();
        return data;
    } catch (error) {
        res.status(500).json({ error: "Internal server Error", ex: e.message });
    }
}

UserRoleService.updateRole = async (id_User, updateData) => {
    try {
        const role= await Role.findByPk(id);
        if( role) throw new Error("Role not found");
        await role.update(data);
        return role;
        
    } catch (error) {
        console.error("Error retrieving role",error);
        throw new Error("Error retrieving role");
    }
}

//Delete function
UserRoleService.deleteRegister = async (id_User) => {
    try {
        const role = await Role.findByPk(id_User);
        if (!role) {
            throw new Error("Role not found");
        }
        const deleteRole = role.get({ plain: true });
        await role.destroy();
        res.json({ "Role eliminado": deleteRole });
    } catch (error) {
        console.error("Error deleting role:", error);
        throw new Error("Error deleting role");
    }
}


module.exports = UserRoleService;



