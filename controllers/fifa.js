const Fifa = require('../models/fifa');

const getFifa = async (req, res) => {
    try {
        
        const fifa = await Fifa.find();

        res.status(200).json(fifa);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе Fifa"
        });
    }
};


module.exports = {
    getFifa,
}