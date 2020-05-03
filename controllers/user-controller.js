const { user } = require('../app/models');

exports.getAll = (req, res, next) => {

}

exports.create = async(req, res, next) => {
    const userModel = await user.create(req.body);
    return res.json(userModel);
}