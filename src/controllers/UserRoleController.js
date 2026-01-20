const UserRoleService = require('../service/UserRoleService');

// Get all Role
exports.getAllRole = async (req, res) => {
    try {
        const Role = await UserRoleService.getAllRole();
        res.json(Role);
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error', ex: e.message });
    }
};

// Create a new Role
exports.newRole = async (req, res) => {
    try {
        const newRole = await UserRoleService.createRole(req.body);
        res.status(201).json(newRole);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Get a specific Role by id
exports.getRole = async (req, res) => {
    try {
        const Role = await UserRoleService.getRoleById(req.params.id);
        if (Role) {
            res.json(Role);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update Role state
exports.updateStateRole = async (req, res) => {
    try {
        const Role = await UserRoleService.updateRole(req.params.id, req.body);
        if (!Role) return res.status(404).json({ error: "Role not found" });
        res.json(Role);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Delete a Role
exports.deleteRole = async (req, res) => {
    try {
        const Role = await UserRoleService.deleteRegister(req.params.id);
        if (!Role) return res.status(404).json({ error: "Role not found" });
        res.json({ "Role eliminado": Role });
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
