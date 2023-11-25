const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

    payment_id: {
        type: String,
        required: true
    },

    custom: {
        type: Array,
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