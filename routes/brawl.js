const express = require('express');
const { getBrawl } = require('../controllers/brawl');

const router = express.Router();

router.get('/', getBrawl);


module.exports = router;