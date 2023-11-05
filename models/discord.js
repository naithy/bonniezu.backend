const mongoose = require('mongoose');

const discordSchema = mongoose.Schema({

    types: {
        type: Map,
        default: {
            'Со входом': {
                '1 месяц': 300,
                '1 год': 1800
            },

            'Без входа': {
                '1 месяц': 260,
                '1 год': 1700
            }
        }
    },

});

module.exports = mongoose.model('Discord', discordSchema);