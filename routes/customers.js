const express = require('express');
const multer = require('multer');
const { getCustomers, deleteCustomer } = require('../controllers/customers');

const router = express.Router();


const storage = multer.diskStorage({
});

const upload = multer({ storage });


router.get('/', getCustomers);
router.delete('/:id', upload.single(), deleteCustomer)


module.exports = router;