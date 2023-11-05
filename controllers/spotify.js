const Spotify = require('../models/spotify');

const getSpotify = async (req, res) => {
    try {
        const spotify = await Spotify.find();

        res.status(200).json(spotify);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о сервисе spotify"
        });
    }
};


module.exports = {
    getSpotify,
}