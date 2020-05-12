module.exports = (sequelize, dataTypes) => {
    const user = sequelize.define('user', {
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING
    });
    user.associate = (models) => {
        user.hasMany(models.folder, { as: 'folders' })
    };

    return user;
}