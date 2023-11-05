const express = require('express');
const { getDiscord } = require('../controllers/discord');

const router = express.Router();

router.get('/', getDiscord);


module.exports = router;