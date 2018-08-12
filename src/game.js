const idHelper = require("./IdHelper.js");
const GameData = require("./data-base/GameData");

class Game {
  constructor({ cols = 10, rows = 10 } = {}) {
    this.cols = cols;
    this.rows = rows;
  }

  static create({ cols = 10, rows = 10 } = {}) {
    const game = new Game({ cols, rows });
    game.playerId = idHelper();
    const token = idHelper();
    game.token = token;
    game.session = `http://localhost:3000/game?token=${token}`;
    console.log(game.cols);
    console.log(game.rows);
    return GameData.createGame({
      Token: game.token,
      PlayerOneId: game.playerId,
      Columns: game.cols,
      Rows: game.rows
    })
      .then(res => {
        return {
          id: res.Id,
          session: game.session,
          playerId: game.playerId
        };
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  static join(token) {
    return GameData.findGameByToken(token)
      .then(res => {
        if (res === null || res.dataValues === undefined) {
          return Promise.reject("Game Not Found");
        }
        const game = res.dataValues;
        return Promise.resolve({
          id: game.Id,
          playerId: idHelper()
        });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
}

module.exports = Game;
