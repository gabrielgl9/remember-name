module.exports = (sequelize, dataTypes) => {
    const character = sequelize.define('character', {
        name: dataTypes.STRING,
        description: dataTypes.TEXT,
        photo: dataTypes.STRING,
        status: dataTypes.STRING.BINARY,
        folder_id: dataTypes.INTEGER
    });

    character.associate = (models) => {
        character.belongsTo(models.folder, {
            foreignKey: 'folder_id',
            as: 'folder'
        })
    };

    return character;
}