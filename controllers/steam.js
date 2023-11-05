const Steam = require('../models/steam');

const getSteam = async (req, res) => {
    try {
        const steam = await Steam.find();

        res.status(200).json(steam);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе steam"
        });
    }
};


module.exports = {
    getSteam,
}