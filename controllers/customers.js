const Customer = require('../models/customer');

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


module.exports = {
    getCustomers,
}