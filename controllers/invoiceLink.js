const TelegramBot = require('node-telegram-bot-api');
const Customer = require('../models/customer');
const crypto = require('crypto');
const customId = require('custom-id')


const TOKEN = process.env.TOKEN;
const PROVIDER_TOKEN = process.env.PROVIDER_TOKEN;

const bot = new TelegramBot(TOKEN, {polling: true});

const SHOP = 9306;
const SECRET = process.env.SECRET;
const CURRENCY = 'RUB'


const getInvoiceLink = async (req, res) => {

    try {
        let { amount, desc } = req.body;

        desc = desc.charAt(0).toUpperCase() + desc.slice(1);

        const payment = customId({ amount, desc })

        const data = [amount, payment, SHOP, CURRENCY, desc, SECRET]
        const sign = crypto.createHash('md5').update(data.join('|')).digest('hex')

        desc = desc.replace(/ /g, '%20')

        const invoiceLink = `https://payok.io/pay?amount=${amount}&payment=${payment}&shop=${SHOP}&desc=${desc}&currency=${CURRENCY}&sign=${sign}&lang=RU`

        res.status(201).json(invoiceLink)
    } catch (error) {
        res.status(500)
    }


    // const errors = {};

    // if(!req.body.title) {
    //     errors.title = {message: "Пожалуйста, укажите название"}
    // }

    // if(!req.body.price) {
    //     errors.price = {message: "Пожалуйста, укажите название"}
    // }

    // if (Object.keys(errors).length > 0) {
    //     return res.status(400).json(errors)
    // }
    

    // try {
    //     const { title, price, data } = req.body;
        
    //     const invoiceLink = await bot.createInvoiceLink(
    //         title, 
    //         description='...', 
    //         payload=data,
    //         provider_token=PROVIDER_TOKEN, 
    //         currency='RUB', 
    //         prices=[
    //             {
    //                 label: title,
    //                 amount: +price * 100
    //             }
    //         ],)
    //     res.status(201).json(invoiceLink)
    // } catch (error) {
    //     res.status(500).json({
    //         message: "Не удалось создать ссылку для оплаты"
    //     });
    // }
}



// bot.on("pre_checkout_query", (msg) => { bot.answerPreCheckoutQuery(msg.id, true); });

// bot.on("successful_payment", async (msg) => { 
//     const { id, first_name, last_name, username } = msg.chat;
//     const { total_amount, invoice_payload } = msg.successful_payment;
//     try {
//         await Customer.create({
//             first_name,
//             last_name,
//             username,
//             user_id: id,
//             total_amount: total_amount / 100,
//             payload: invoice_payload
//         })
//     } catch(error) {
//         console.log(error)
//     }


//     bot.sendMessage(msg.chat.id, 'Товар был куплен, ожидайте связи с продавцом')
// }); 


bot.on("message", async (msg) => {
    const text = msg.text

    if(text === '/start') {
        await bot.sendMessage(msg.chat.id, 'Переходи в магазин по кнопке ниже!', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Магазин', web_app: {url: 'https://comfy-blini-ab6f36.netlify.app/'}}]
                ]
            }
        })
    }

})


module.exports = {
    getInvoiceLink,
}