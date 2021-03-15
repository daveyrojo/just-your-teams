const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//may need to make a models for the sport, league, and team so user can have more than one team, league and sport to follow
//or may need just a follow model that contains the the sports, leagues and teams, etc. need to review model structure

class Aboutme extends Model {}

Aboutme.init(
  {
    sport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    league: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about_me: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "aboutme",
  }
);

module.exports = AboutMe;
