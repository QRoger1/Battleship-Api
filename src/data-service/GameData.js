
const GameModel = require('../model/GameDto');
const InitialConnect = require('./SequelizeConnection');

let GameDataController = {};

GameDataController.createGame = async function (newGameData) {
    return new Promise((resolve, reject) => {
      let tempConnect = InitialConnect();      
      let tempModel = GameModel(tempConnect);      
      tempModel.create(newGameData).then(res => {        
        resolve(res.Id);
      }).catch(err => {        
        resolve(err);
      });
    });
  }

module.exports = GameDataController;