const Sequelize = require('sequelize');

let gameModal = function (sequelize) {
    var GameDto = sequelize.define('Game', {
            Id:{
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              unique: true
            },
            PlayerId:{
              type: Sequelize.STRING,      
            },
            Token:{
              type: Sequelize.STRING
            }
          });
    return GameDto;
  }
  
  module.exports = gameModal;