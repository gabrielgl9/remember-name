module.exports = (sequelize, dataTypes) => {
    const user = sequelize.define('user', {
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING
    });

    return user;
}