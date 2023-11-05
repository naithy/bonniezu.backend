const express = require('express');
const multer = require('multer');
const { getInvoiceLink } = require('../controllers/invoiceLink');

const router = express.Router();

const storage = multer.diskStorage({
    
});

const upload = multer({ storage });

router.post('/', upload.single(), getInvoiceLink);


module.exports = router;