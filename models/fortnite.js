const mongoose = require('mongoose');

const fortniteSchema = mongoose.Schema({

    types: {
        type: Map,
        required: false
    },

});

module.exports = mongoose.model('Fortnite', fortniteSchema);