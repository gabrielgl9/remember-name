require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

exports.generateToken = async(data) => {
    return jwt.sign(data, process.env.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async(token) => {
    return await jwt.verify(token, process.env.SALT_KEY);
}

exports.authorization = async(req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito'
        });
    } else {
        jwt.verify(token, process.env.SALT_KEY, (error, decode) => {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido'
                });
            } else {
                next();
            }
        });
    }

}