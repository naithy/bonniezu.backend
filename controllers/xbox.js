const Xbox = require('../models/xbox');

const getXbox = async (req, res) => {
    try {
        
        const xbox = await Xbox.find();

        res.status(200).json(xbox);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе Xbox"
        });
    }
};


module.exports = {
    getXbox,
}