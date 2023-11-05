const Discord = require('../models/discord');

const getDiscord = async (req, res) => {
    try {
        
        const discord = await Discord.find();

        res.status(200).json(discord);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе discord"
        });
    }
};


module.exports = {
    getDiscord,
}