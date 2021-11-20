const { Sequelize, DataTypes, TEXT } = require('sequelize');
const sequelize = require("../db/db")


const Organization = sequelize.define('organization', {
  id: {
    type: DataTypes.STRING(),
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: false

  },
  "orName": {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  "orMail": {
    type: DataTypes.STRING(),
    allowNull: false
  },
  "orPassword": {
    type: DataTypes.STRING(),
    allowNull: false
  },
  "orLogo": {
    type: DataTypes.STRING(),
    allowNull: false
  },
  "orNumber": {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  "orEntryDate": {
    type: DataTypes.DATE(),
    allowNull: false
  }

}, {
  timestamps: false
});


module.exports = Organization