const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: false
    },

    username: {
        type: String,
        required: true
    },

    user_id: {
        type: String,
        required: true
    },

    total_amount: {
        type: Number,
        required: true
    },

    payload: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Customer', customerSchema);