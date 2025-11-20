const Users = require('../../models/usersModel.js');  // példa, ha Mongoose-t használsz

async function getAllUsersBackend(req, res) {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

async function deleteOneUserBackend(req, res) {
    try {
        const { id } = req.params;
        await Users.findByIdAndDelete(id);
        res.json({ msg: "Felhasználó törölve!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

async function updateOneUserBackend(req, res) {
    try {
        const { id, nev, email, admin } = req.body;

        await Users.findByIdAndUpdate(id, {
            nev,
            email,
            admin
        });

        res.json({ msg: "Felhasználó módosítva!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getAllUsersBackend,
    deleteOneUserBackend,
    updateOneUserBackend
};