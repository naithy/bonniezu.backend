const express = require('express');
const { getChatgpt } = require('../controllers/chatgpt');

const router = express.Router();

router.get('/', getChatgpt);


module.exports = router;