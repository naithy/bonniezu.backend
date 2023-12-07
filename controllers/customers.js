const Customer = require('../models/customer');
const crypto = require('crypto')

const SECRET = process.env.SECRET


const createCustomer = async (req, res) => {
    try {
        const { 
            payment_id, 
            shop, 
            amount, 
            profit, 
            desc, 
            currency, 
            currency_amount, 
            sign, 
            email, 
            date, 
            method, 
            custom, 
            underpayment 
        } = await req.body

        
        console.log(`payment_id: ${payment_id}\nshop: ${shop}\namount: ${amount}\nprofit: ${profit}\ndesc: ${desc}\ncurrency${currency}\ncurrency_amount: ${currency_amount}\nsign: ${sign}\nemail: ${email}\ndate:${date}\nmethod: ${method}\ncustom: ${custom}\nunderpayment: ${underpayment}`)

        const data = [SECRET, desc, currency, shop, payment_id, amount]
        const sign2 = crypto.createHash('md5').update(data.join('|')).digest('hex')
        console.log(sign2)

        console.log(sign2 === sign)
        console.log(sign2 == sign)

        if (sign2 === sign) {
            res.status(200).json('ok')
            await Customer.create({
                payment_id,
                custom,
                total_amount: amount,
                payload: desc,
            })
            res.status(200).json('ok')
        }


    } catch (error) {
        console.log(error)
    }
}


const getCustomers = async (req, res) => {
    try {
        
        const customers = await Customer.find();

        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить информацию о клиентах"
        });
    }
};


const deleteCustomer = async (req, res) => {
    try {

        await Customer.findByIdAndDelete({_id: req.params.id})
        res.status(200)
    } catch (error) {
        res.status(404).json({
            message: 'Не удалось найти удалить клиента с таким ID'
        })
    }
}

module.exports = {
    createCustomer,
    getCustomers,
    deleteCustomer
}