const mongoose = require('mongoose');

const steamSchema = mongoose.Schema({
    types: {
        type: Map,
        default: {
            'Смена региона': {
                'Турция': 200,
                'Аргентина': 200
            },
            'Пополнение баланса': true
        },

    }
});

module.exports = mongoose.model('Steam', steamSchema);