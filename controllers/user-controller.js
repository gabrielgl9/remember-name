const { user } = require('../app/models');
const authService = require('../services/auth-service');

exports.login = async(req, res, next) => {
    const userModel = await user.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    });

    if (!userModel) {
        res.status(404).send({
            message: 'Usuário ou senha inválidos'
        });
    }

    const token = await authService.generateToken({
        name: userModel.name,
        email: userModel.email
    });

    return res.status(201).send({
        token,
        data: {
            name: userModel.name,
            email: userModel.email
        }
    })
}

exports.getAll = async(req, res, next) => {
    try {
        const users = await user.findAll();
        res.status(200).json({
            error: false,
            data: users
        });
    } catch (e) {
        res.status(400).json({
            error: true,
            data: [],
            error: e
        });
    }
}

exports.create = async(req, res, next) => {
    try {
        const userModel = await user.create(req.body);
        return res.status(201).json({
            error: false,
            data: userModel
        });
    } catch (e) {
        res.status(400).json({
            error: true,
            data: [],
            error: e
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await user.destroy({
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
}

exports.update = async(req, res, next) => {
    try {
        const userModel = await user.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({
            error: false,
            data: userModel
        });
    } catch (e) {
        res.status(400).json({
            error: true,
            data: [],
            error: e
        });
    }
}