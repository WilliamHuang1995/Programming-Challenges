const { findBlocks } = require("./block");
map = [
  [1, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1]
];
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
map2 = CreateRandom2DArray(10, 10);
console.log(map2);
var blocks2 = findBlocks(map2);
// console.log(blocks);
console.log(blocks2);
