const { character } = require('../app/models');
const authService = require('../services/auth-service');

exports.getAll = async(req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        const characterModel = await character.findAll({
            where: {
                id: data.id
            }
        });
        res.status(200).send({
            error: false,
            data: characterModel
        });
    } catch (e) {
        res.status(401).send({
            error: true,
            data: [],
            error: e
        })
    }
};

exports.create = (req, res, next) => {
    try {
        const characterModel = await character.create(req.body);
        res.json(201).json({
            error: false,
            data: characterModel
        });
    } catch (e) {
        res.status(401).send({
            error: true,
            data: [],
            error: e
        });
    }
};

exports.delete = (req, res, next) => {
    try {
        await character.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(204).json({
            error: false,
            message: 'Remoção sucedida'
        });
    } catch (e) {
        res.status(400).json({
            error: true,
            data: [],
            error: e
        });
    }
};

exports.update = (req, res, next) => {
    try {
        const characterModel = await character.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({
            error: false,
            data: characterModel
        });
    } catch (e) {
        res.status(400).json({
            error: true,
            data: [],
            error: e
        });
    }
};