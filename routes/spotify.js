const express = require('express');
const { getSpotify } = require('../controllers/spotify');


const router = express.Router();

router.get('/', getSpotify);


module.exports = router;