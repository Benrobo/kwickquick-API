const { Sequelize, DataTypes, TEXT } = require('sequelize');

const Organization = sequelize.define('User', {
  id:{
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true

  },
  "orName":{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  "orMail":{
    type: DataTypes.TEXT,
    allowNull: false
  },
  "orPassword":{
    type: DataTypes.TEXT,
    allowNull: false
  },
  "orLogo:":{
    type: DataTypes.TEXT,
    allowNull: false
  },
  "orNumber":{
    type: DataTypes.NUMBER,
    allowNull: false
  },
  "orEntryDate":{
    type: DataTypes.NOW,
    allowNull: false
  }

}, {
  createdAt: false,
  updatedAt: false
});


module.exports = Organization