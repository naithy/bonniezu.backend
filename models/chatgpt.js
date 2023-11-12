const mongoose = require('mongoose');

const chatgptSchema = mongoose.Schema({

    types: {
        type: Map,
        required: false
    },

});

module.exports = mongoose.model('Chatgpt', chatgptSchema);