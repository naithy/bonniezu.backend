const mongoose = require('mongoose');

const brawlSchema = mongoose.Schema({

    types: {
        type: Map,
        required: false
    },

});

module.exports = mongoose.model('Brawl', brawlSchema);