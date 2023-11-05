const mongoose = require('mongoose');

const faceitSchema = mongoose.Schema({

    types: {

        type: Map,
        default: {
            "Premium": {
                "1 месяц": 300,
                "1 год": 1200
            },

            "Plus": {
                "1 месяц": 200,
                "1 год": 1000
            }
        }

    }

});

module.exports = mongoose.model('Faceit', faceitSchema);