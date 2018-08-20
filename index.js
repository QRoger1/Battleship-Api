const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
const InitializeData = require("./src/database/InitializeData");
const Database = require("./src/database/Database");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Game = require("./src/Game.js");
app.get("/game", (req, res) => {
  Game.join(req.query.token, Database)
    .then(game => {
      res.send(game);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(404);
    });
});

app.post("/game", (req, res) => {
  Game.create(req.body, Database)
    .then(game => {
      res.send(game);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });
});

app.put("/game/:gameId/player/:playerId/board", (req, res) => {
  Game.configurationGrid(
    {
      gameId: req.params.gameId,
      playerId: req.params.playerId,
      ships: req.body
    },
    Database
  )
    .then(game => {
      res.send(game);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });
});

Database.connectionInstance.sync().then(() => {
  InitializeData(Database);
  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
});
