module.exports = (sequelize, dataTypes) => {
    const folder = sequelize.define('folder', {
        name: dataTypes.STRING,
        description: dataTypes.TEXT,
        photo: dataTypes.STRING,
        status: dataTypes.STRING.BINARY,
        user_id: dataTypes.INTEGER
    });

    return folder;
}