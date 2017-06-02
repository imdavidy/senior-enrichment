'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');


// user can be student and Instructor;
  // where each will have different set of previledges

module.exports = db.define('location', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/public/ugaArch.jpg'
  },
  details: {
    type: Sequelize.TEXT
  },
  locationType: {
    type: Sequelize.ENUM,
    values: ['Campus', 'Main Office', 'Office Branch', 'Event'],
    allowNull: false,
    defaultValue: 'Campus'
  }
});
