const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    gameImage: {
        type: String,
        required: true
    },

    types: {
        type: Map,
        required: true
    }
});

module.exports = mongoose.model('Game', gameSchema);