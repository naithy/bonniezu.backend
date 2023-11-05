const express = require('express');
const { getCustomers, deleteCustomer } = require('../controllers/customers');

const router = express.Router();

router.get('/', getCustomers);
router.delete('/:id', deleteCustomer)


module.exports = router;