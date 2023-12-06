const Customer = require('../models/customer');
const crypto = import('crypto')

const SECRET = process.env.SECRET


const createCustomer = async (req, res) => {
    console.log('work')
    // try {
    //     const { 
    //         payment_id, 
    //         shop, 
    //         amount, 
    //         profit, 
    //         desc, 
    //         currency, 
    //         currency_amount, 
    //         sign, 
    //         email, 
    //         date, 
    //         method, 
    //         custom, 
    //         underpayment 
    //     } = req.body
    //     console.log('Сработало', sign)
    //     const data = [SECRET, desc, currency, shop, payment_id, amount]

    //     const sign2 = crypto.createHash('md5').update(data.join('|')).digest('hex')
        
    //     console.log('work', sign2)

    //     if (sign2 === sign) {
    //         await Customer.create({
    //             payment_id,
    //             custom,
    //             total_amount: amount,
    //             payload: desc,
    //         })
    //     }

    // } catch (error) {

    // }
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