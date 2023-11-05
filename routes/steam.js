const express = require('express');
const { getSteam } = require('../controllers/steam');


const router = express.Router();

router.get('/', getSteam);


module.exports = router;