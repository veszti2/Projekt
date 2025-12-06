const Trainer = require('../models/Trainer.js');

exports.updateIdopont = async (req, res) => {
    try {
        const { id } = req.params;
        const { selectedDate, selectedTime } = req.body;
        console.log({ id, selectedDate, selectedTime });
        const trainer = await Trainer.findById({ _id: id });
        console.log(trainer);

        await Trainer.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    foglalt: [
                        ...trainer.foglalt,
                        `${selectedDate},${selectedTime}`,
                    ],
                },
            }
        );

        console.log([...trainer.foglalt, `${selectedDate},${selectedTime}`]);

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres időpont foglalás!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba!' });
    }
};
