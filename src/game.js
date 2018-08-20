const idHelper = require("./IdHelper.js");
const IsValidShipsPosition = require("./validator/IsValidShipsPosition");
class Game {
  constructor({ cols = 10, rows = 10 } = {}) {
    this.cols = cols;
    this.rows = rows;
  }

  static create({ cols = 10, rows = 10 } = {}, database) {
    const game = new Game({ cols, rows });
    game.playerId = idHelper();
    const token = idHelper();
    game.token = token;
    game.session = `http://localhost:3000/game?token=${token}`;
    return database.Game.create({
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

  static join(token, database) {
    return database.Game.findOne({
      where: { Token: token }
    })
      .then(res => {
        if (res === null || res.dataValues === undefined) {
          throw "Game Not Found";
        }
        const game = res.dataValues;
        const playerTwoId = idHelper();
        return database.Game.update(
          {
            PlayerTwoId: playerTwoId
          },
          {
            where: {
              Id: game.Id
            }
          }
        )
          .then(res => {
            return {
              id: game.Id,
              playerId: playerTwoId,
              rows: game.Rows,
              cols: game.Columns
            };
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  static configurationGrid(configGrid, database) {
    const gamePromise = database.Game.findOne({
      where: { Id: configGrid.gameId }
    });
    const shipPromise = database.Ship.findAll();
    const shipSetupPromise = database.ShipSetup.findAll({
      where: { GameId: configGrid.gameId, PlayerId: configGrid.playerId }
    });
    return Promise.all([gamePromise, shipPromise, shipSetupPromise]).then(
      ([game, ships, shipSetupsPlayer]) => {
        if (game === null) {
          throw "Error, GameId is invalid.";
        }
        if (ships === null || ships.length === 0) {
          throw "Error, There are no ship configurations.";
        }
        if (shipSetupsPlayer !== null && shipSetupsPlayer.length !== 0) {
          throw "Error, There is already a previous setup.";
        }
        if (ships.length !== configGrid.ships.length) {
          throw "Error, Number of shps invalidates.";
        }
        if (
          IsValidShipsPosition({
            boardX: game.Rows,
            boardY: game.Columns,
            boards: configGrid.ships
          }) === false
        ) {
          throw "Error, One of the boats exceeds the limit.";
        }

        const shipSetups = configGrid.ships.map(item => {
          return {
            GameId: configGrid.gameId,
            PlayerId: configGrid.playerId,
            TypeShip: item.type,
            Orientation: item.orientation,
            X: item.x,
            Y: item.y
          };
        });

        return database.ShipSetup.bulkCreate(shipSetups).then(res => {
          return {
            Success: true,
            Message: "Successful process."
          };
        });
      }
    );
  }
}

module.exports = Game;
