const GameModel = require("../model/GameModel");
const InitialConnect = require("./SequelizeConnection");
const ConfigConnect = require("../config/ConfigConnect.js");
const instanceConnect = InitialConnect(ConfigConnect);

class GameData {
  static createGame(newGameData) {
    const gameModel = GameModel(instanceConnect);
    return gameModel.sync().then(() => {
      return gameModel.create(newGameData);
    });
  }

  static findGameByToken(token) {
    const gameModel = GameModel(instanceConnect);
    return gameModel.sync().then(() => {
      return gameModel.findOne({
        where: { Token: token }
      });
    });
  }
}

module.exports = GameData;
