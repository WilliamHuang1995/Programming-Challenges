const { findBlocks, findBlocksByDraw } = require("./blocks");
const CreateRandom2DArray = (rows, columns) => {
  var x = new Array(rows);
  for (var i = 0; i < rows; i++) {
    x[i] = new Array(columns);
    for (var j = 0; j < columns; j++) {
      var randInt = Math.round(Math.random());
      x[i][j] = randInt;
    }
  }
  return x;
};
// var blocks = findBlocks(map);
const map = CreateRandom2DArray(10, 10);
console.log(map);
var blocks = findBlocks(map);
var blocksByDraw = findBlocksByDraw(map);
console.log(map);
console.log(blocks);
console.log(blocksByDraw);
