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
        default: {
            'steam': 2000,
            'epic': 1500,
            'xbox': 4000,
            'ps': 4500
        }
    }
});

module.exports = mongoose.model('Game', gameSchema);