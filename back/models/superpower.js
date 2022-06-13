'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superpower.belongsToMany(models.Hero, {
        through: 'heroes_to_powers',
        foreignKey: 'superpowerId',
      });
    }
  }
  Superpower.init(
    {
      superpower: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Superpower',
      tableName: 'superpowers',
      underscored: true,
    }
  );
  return Superpower;
};
