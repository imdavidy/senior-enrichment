'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');


// user can be student and Instructor;
  // where each will have different set of previledges

module.exports = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  userType: {
    type: Sequelize.ENUM,
    values: ['Student', 'Instructor', 'Administrator'],
    allowNull: false,
    defaultValue: 'Student'
  },
  details: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})