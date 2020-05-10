'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('characters', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            photo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            status: {
                type: Sequelize.STRING.BINARY,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('characters');
    }
};