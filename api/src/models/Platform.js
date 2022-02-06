const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
    sequelize.define("platform", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    })
};