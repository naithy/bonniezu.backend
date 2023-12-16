const Fortnite = require('../models/fortnite');

const getFortnite = async (req, res) => {
    try {
        
        const fortnite = await Fortnite.find();

        res.status(200).json(fortnite);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе Fortnite"
        });
    }
};


module.exports = {
    getFortnite,
}