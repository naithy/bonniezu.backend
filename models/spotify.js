const mongoose = require('mongoose');

const spotifySchema = mongoose.Schema({
    times: {
        type: Map,
        default: {
            "1 месяц": 200,
            "2 месяца": 380,
            "6 месяцев": 800,
            "1 год": 1500
        }
    }
});

module.exports = mongoose.model('Spotify', spotifySchema);