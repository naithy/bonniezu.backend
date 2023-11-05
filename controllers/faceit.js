const Faceit = require('../models/faceit');

const getFaceit = async (req, res) => {
    try {
        const faceit = await Faceit.find();

        res.status(200).json(faceit);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе faceit"
        });
    }
};


module.exports = {
    getFaceit,
}