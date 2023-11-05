const express = require('express');
const app = express();
const http = require('http')
const { Server } = require('socket.io')
const mongoose = require('mongoose');
const cors = require('cors');
const Customer = require('./models/customer')


require('dotenv').config();


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
app.use('/api/customers', require('./routes/customers'))

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});


const port = process.env.PORT || 5000;


mongoose.connect("mongodb://localhost:27001")
    .then(() => {
        server.listen(port, () => {
            console.log(`App listeing on port ${port}`);
        });
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));


io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`)

    const changeStream = Customer.watch();
  
    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        const newCustomer = change.fullDocument;
        socket.emit('receive_customer', newCustomer)
      }
    });
})

// server.on('connection', async (socket) => {
//     try {
//         const customers = await Customer.find()
//         socket.send(JSON.stringify({type: 'items', payload: customers}))
//     } catch (error) {
//         console.error('Error retrieving items:', error)
//     }

//     const changeStream = Customer.watch();
//     changeStream.on('change', (change) => {
//         if (change.operationType === 'insert') {
//             const customer = {
//                 _id: change.fullDocument._id,
//                 first_name: change.fullDocument.first_name,
//                 last_name: change.fullDocument.first_name,
//                 username: change.fullDocument.username,
//                 user_id: change.fullDocument.user_id,
//                 total_amount: change.fullDocument.total_amount,
//                 payload: change.fullDocument.payload
//             }
//             socket.send(JSON.stringify({type: 'changeData', payload: customer}));
//         }
//     })
// })
