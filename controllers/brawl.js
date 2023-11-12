const Brawl = require('../models/brawl');

const getBrawl = async (req, res) => {
    try {
        
        const brawl = await Brawl.find();

        res.status(200).json(brawl);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе Brawl"
        });
    }
};


module.exports = {
    getBrawl,
}