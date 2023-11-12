const TelegramBot = require('node-telegram-bot-api');
const Customer = require('../models/customer');

const TOKEN = process.env.TOKEN;
const PROVIDER_TOKEN = process.env.PROVIDER_TOKEN;

const bot = new TelegramBot(TOKEN, {polling: true});


const getInvoiceLink = async (req, res) => {

    const errors = {};

    if(!req.body.title) {
        errors.title = {message: "Пожалуйста, укажите название"}
    }

    if(!req.body.price) {
        errors.price = {message: "Пожалуйста, укажите название"}
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors)
    }
    

    try {
        const { title, price, photoUrl, data } = req.body;
        
        const invoiceLink = await bot.createInvoiceLink(
            title, 
            description='...', 
            payload=data,
            provider_token=PROVIDER_TOKEN, 
            currency='RUB', 
            prices=[
                {
                    label: title,
                    amount: +price * 100
                }
            ],)
        res.status(201).json(invoiceLink)
    } catch (error) {
        res.status(500).json({
            message: "Не удалось создать ссылку для оплаты"
        });
    }
}

bot.on("pre_checkout_query", (msg) => { bot.answerPreCheckoutQuery(msg.id, true); });

bot.on("successful_payment", async (msg) => { 
    const { id, first_name, last_name, username } = msg.chat;
    const { total_amount, invoice_payload } = msg.successful_payment;
    try {
        await Customer.create({
            first_name,
            last_name,
            username,
            user_id: id,
            total_amount: total_amount / 100,
            payload: invoice_payload
        })
    } catch(error) {
        console.log(error)
    }


    bot.sendMessage(msg.chat.id, 'Товар был куплен, ожидайте связи с продавцом')
}); 

module.exports = {
    getInvoiceLink,
}