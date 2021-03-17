const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Account extends Model {}

Account.init(
    {
        // define columns
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        profilename:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        team1:{
          type: DataTypes.STRING,
          allowNull:false,

        }

    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'account',
  }
);

module.exports = Account;