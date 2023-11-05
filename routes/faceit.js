const express = require('express');
const { getFaceit } = require('../controllers/faceit');


const router = express.Router();

router.get('/', getFaceit);


module.exports = router;