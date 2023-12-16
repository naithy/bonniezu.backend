const Battlenet = require('../models/battlenet');

const getBattlenet = async (req, res) => {
    try {
        
        const battlenet = await Battlenet.find();

        res.status(200).json(battlenet);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе Brawl"
        });
    }
};


module.exports = {
    getBattlenet,
}