const mongoose = require('mongoose');

const xboxSchema = mongoose.Schema({

    types: {
        type: Map,
        required: false
    },

});

module.exports = mongoose.model('Xbox', xboxSchema);