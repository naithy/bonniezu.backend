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


const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.body

        await Customer.findByIdAndDelete({id})

    } catch (error) {
        res.status(404).json({
            message: 'Не удалось найти удалить клиента с таким ID'
        })
    }
}

module.exports = {
    getCustomers,
    deleteCustomer
}