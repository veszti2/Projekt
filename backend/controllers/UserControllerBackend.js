const User = require('../models/User.js');

exports.getAllUsersBackend = async (req, res) => {
    try {
        const usersBackend = await User.find();
        res.statusCode = 200;
        return res.render("Users.ejs", { usersBackend });
    } catch (error) {
        res.statusCode = 404;
        return res.render("404.ejs");
    }
};

exports.getOneUserBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const userBackend = await User.findById({ _id: id });
        res.statusCode = 200;
        return res.render("User.ejs", { userBackend });
    } catch (error) {
        res.statusCode = 404;
        return res.render("404.ejs");
    }
};

exports.postUserBackend = async (req, res) => {
    try {
        const { nev, statusz } = req.body;
        const newUserBackend = new User({ nev, statusz });
        await newUserBackend.save();
        res.statusCode = 201;
        return res.json({ msg: 'Létre jött az új felhasználó!' });
    } catch (error) {
        res.statusCode = 409;
        return res.json({ msg: 'Nem jött létre az új felhasználó!' });
    }
};

exports.updateOneUserBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const { nev, statusz } = req.body;
        await User.findByIdAndUpdate({ _id: id }, { nev, statusz });
        res.statusCode = 201;
        return res.json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        res.statusCode = 404;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.deleteOneUserBackend = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete({ _id: id });
        res.statusCode = 200;
        return res.json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.statusCode = 409;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};
