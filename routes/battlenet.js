const express = require('express');
const { getBattlenet } = require('../controllers/battlenet');

const router = express.Router();

router.get('/', getBattlenet);


module.exports = router;