module.exports = ({ boardX = 0, boardY = 0, boards = [] } = {}) => {
  return boards.every(item => {
    if (item.orientation === "h") {
      return (
        item.x <= boardX && item.y <= boardY && item.y + item.type - 1 <= boardY
      );
    } else {
      return (
        item.x <= boardX && item.y <= boardY && item.x + item.type - 1 <= boardX
      );
    }
  });
};
