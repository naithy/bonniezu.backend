const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/static', express.static(__dirname + '/assets'));
app.use('/api/games', require('./routes/games'));
app.use('/api/steam', require('./routes/steam'));
app.use('/api/createInvoiceLink', require('./routes/invoiceLink'));
app.use('/api/faceit', require('./routes/faceit'));
app.use('/api/spotify', require('./routes/spotify'));
app.use('/api/discord', require('./routes/discord'));
app.use('/', require('./routes/cert'));


const port = process.env.PORT || 5000;


mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        app.listen(port, () => {
            console.log(`App listeing on port ${port}`);
        });
    });