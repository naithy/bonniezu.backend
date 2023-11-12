const Chatgpt = require('../models/chatgpt');

const getChatgpt = async (req, res) => {
    try {
        
        const chatgpt = await Chatgpt.find();

        res.status(200).json(chatgpt);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе chatgpt"
        });
    }
};


module.exports = {
    getChatgpt,
}