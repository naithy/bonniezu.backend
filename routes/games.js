const express = require('express');
const path = require('path');
const multer = require('multer');
const { getGames, createGame, getGame } = require('../controllers/games');


const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const router = express.Router();

router.get('/', getGames);

router.get('/:id', getGame);

router.post('/', upload.single('gameImage'), createGame);


module.exports = router;