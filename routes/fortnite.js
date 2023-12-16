const express = require('express');
const { getFortnite } = require('../controllers/fortnite');

const router = express.Router();

router.get('/', getFortnite);


module.exports = router;