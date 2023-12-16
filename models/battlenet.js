const mongoose = require('mongoose');

const batllenetSchema = mongoose.Schema({

    types: {
        type: Map,
        required: false
    },

});

module.exports = mongoose.model('Battlenet', batllenetSchema);