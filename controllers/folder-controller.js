const { folder } = require('../app/models');
const authService = require('../services/auth-service');

exports.getAll = async(req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        const folderModel = await folder.findAll({
            where: {
                user_id: data.id
            }
        });
        res.status(200).send({
            error: false,
            data: folderModel
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
        const token = req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        const folderModel = await folder.create({
            ...req.body,
            user_id: data.id
        });
        res.json(201).json({
            error: false,
            data: folderModel
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
        const token = req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        await folder.destroy({
            where: {
                id: req.params.id,
                user_id: data.id
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
        const token = req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        const folderModel = await folder.update(req.body, {
            where: {
                id: req.params.id,
                user_id: data.id
            }
        });
        return res.status(200).json({
            error: false,
            data: folderModel
        });
    } catch (e) {
        res.status(400).json({
            error: true,
            data: [],
            error: e
        });
    }
};