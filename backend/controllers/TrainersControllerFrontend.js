// --- Quateres edzők3 ---
const Trainer = require('../models/Trainer');

exports.getAllTrainersFrontend = async (req, res) => {
    try {
        const trainers = await Trainer.find({});
        return res.json({ trainers });
    } catch (err) {
        res.status(500).json({
            message: 'Hiba az edzők lekérésekor',
            error: err.message,
        });
    }
};
