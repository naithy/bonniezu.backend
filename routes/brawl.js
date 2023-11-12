const express = require('express');
const { getXbox } = require('../controllers/xbox');

const router = express.Router();

router.get('/', getXbox);


module.exports = router;