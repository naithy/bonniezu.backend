const mongoose = require('mongoose');

const fifaSchema = mongoose.Schema({

    types: {
        type: Map,
        required: false
    },

});

module.exports = mongoose.model('Fifa', fifaSchema);