const { character } = require('../app/models');

exports.getAllByFolder = async(req, res, next) => {
    try {
        const characterModel = await character.findAll({
            where: {
                folder_id: req.params.idFolder
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

exports.create = async(req, res, next) => {
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

exports.delete = async(req, res, next) => {
    try {
        await character.destroy({
            where: {
                id: req.params.id,
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

exports.update = async(req, res, next) => {
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