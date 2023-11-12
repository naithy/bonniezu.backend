const express = require('express');
const { getFifa } = require('../controllers/fifa');

const router = express.Router();

router.get('/', getFifa);


module.exports = router;