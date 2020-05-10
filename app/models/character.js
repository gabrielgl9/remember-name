module.exports = (sequelize, dataTypes) => {
    const character = sequelize.define('character', {
        name: dataTypes.STRING,
        description: dataTypes.TEXT,
        photo: dataTypes.STRING,
        status: dataTypes.BOOLEAN,
        user_id: dataTypes.INTEGER
    });

    return character;
}