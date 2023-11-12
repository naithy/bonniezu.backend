const Game = require('../models/game');

/**
 * Получить список игр
 * @param {*} req 
 * @param {*} res 
 */
const getGames = async (req, res) => {
    try {
        const games = await Game.find();

        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить список игр"
        });
    }
};

/**
 * Создать игру
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createGame = async (req, res) => {
    const errors = {};

    if(!req.body.name) {
        errors.name = {message: "Пожалуйста, укажите название"}
    }

    // if(!req.file) {
    //     errors.gameImage = {message: "Пожалуйста, добавьте фото игры"}
    // }

    if(!req.body.types) {
        errors.name = {message: 'Пожалуйста, укажите опции'}
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors)
    }

    try {
        const { name, types } = req.body;

        const game = await Game.create({
            name, 
            // gameImage: `https://bonniezu.ru/static/${req.file.filename}`,
            types: types
        });

        res.status(201).json({game})
    } catch(error) {
        res.status(500).json({
            message: "Не удалось создать game"
        });
        console.log(error)
    }
};

/**
 * Получить игру по id
 * @param {*} req 
 * @param {*} res 
 */
const getGame = async (req, res) => {
    try {
        const game = await Game.find({ _id: req.params.id });

        res.status(200).json(game);
    } catch(error) {
        res.status(400).json({
            message: "Игра не найдена",
        });
    }
};

module.exports = {
    getGames,
    createGame,
    getGame
}