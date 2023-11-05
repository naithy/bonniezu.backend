const express = require('express');
const multer = require('multer');
const { getCustomers, deleteCustomer } = require('../controllers/customers');

const router = express.Router();


const storage = multer.diskStorage({
});

router.get('/', getCustomers);
router.delete('/:id', upload.single(), deleteCustomer)


module.exports = router;