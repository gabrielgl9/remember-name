module.exports = (sequelize, dataTypes) => {
    const folder = sequelize.define('folder', {
        name: dataTypes.STRING,
        description: dataTypes.TEXT,
        photo: dataTypes.STRING,
        status: dataTypes.STRING.BINARY,
        user_id: dataTypes.INTEGER
    });
    folder.associate = (models) => {
        folder.hasMany(models.character, { as: 'characters' })
    };
    folder.associate = (models) => {
        folder.belongsTo(models.user, {
            foreignKey: 'user_id',
            as: 'user'
        })
    };

    return folder;
}