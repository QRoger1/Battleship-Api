module.exports = database => {
  const shipList = [
    { TypeShip: 2, Name: "PatrolCraft", Size: 2, Quantity: 1 },
    { TypeShip: 3, Name: "Submarine", Size: 3, Quantity: 1 },
    { TypeShip: 3, Name: "Destroyer", Size: 3, Quantity: 1 },
    { TypeShip: 4, Name: "Battleship", Size: 4, Quantity: 1 },
    { TypeShip: 5, Name: "Carrier", Size: 5, Quantity: 1 }
  ];

  return database.Ship.count().then(Quantity => {
    if (Quantity === 0) {
      return database.Ship.bulkCreate(shipList);
    } else {
      return null;
    }
  });
};
