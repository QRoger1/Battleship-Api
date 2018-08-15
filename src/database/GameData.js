const GameModel = require("../model/GameModel");
const SequelizeConnection = require("./SequelizeConnection");
const DatabaseConnection = require("../config/DatabaseConnection.js");
const connectionInstance = SequelizeConnection(DatabaseConnection);

class GameData {
  static createGame(newGame) {
    const gameModel = GameModel(connectionInstance);
    return gameModel.sync().then(() => {
      return gameModel.create(newGame);
    });
  }

  static findGameByToken(token) {
    const gameModel = GameModel(connectionInstance);
    return gameModel.sync().then(() => {
      return gameModel.findOne({
        where: { Token: token }
      });
    });
  }
}

module.exports = GameData;
