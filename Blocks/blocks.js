module.exports = {
  findBlocks: map => {
    var block = 0;
    var map2 = Create2DArray(map.length, map[0].length);
    for (var i = 0; i < map.length; i++) {
      for (var j = 0; j < map[0].length; j++) {
        if (map[i][j] == 1 && map2[i][j] == 0) {
          block += 1;
          // recursion here
          recursion(i, j, map2, map);
        }
      }
    }
    return block;
  },
  findBlocksByDraw: map => {
    const clone = map;
    let block = 0;
    for (var i = 0; i < clone.length; i++) {
      for (var j = 0; j < clone[0].length; j++) {
        if (clone[i][j] == 1) {
          block += 1;
          // recursion here
          draw(i, j, clone);
        }
      }
    }
    return block;
  }
};

const draw = (i, j, map) => {
  if (i < 0 || j < 0 || i == map.length || j == map[0].length) {
    return;
  }
  if (map[i][j] == 1) {
    map[i][j] = 2;
    draw(i + 1, j, map);
    draw(i - 1, j, map);
    draw(i, j + 1, map);
    draw(i, j - 1, map);
  }
};
const recursion = (i, j, map2, map) => {
  //out of bounds
  if (i < 0 || j < 0 || i == map.length || j == map[0].length) {
    return;
  }
  if (map[i][j] == 1) {
    map2[i][j] = "OK";
    if (i + 1 < map.length && map[i + 1][j] && !map2[i + 1][j]) {
      recursion(i + 1, j, map2, map);
    }
    if (i - 1 >= 0 && map[i - 1][j] && !map2[i - 1][j]) {
      recursion(i - 1, j, map2, map);
    }
    if (j + 1 < map[0].length && map[i][j + 1] && !map2[i][j + 1]) {
      recursion(i, j + 1, map2, map);
    }
    if (j - 1 >= 0 && map[i][j - 1] && !map2[i][j - 1]) {
      recursion(i, j - 1, map2, map);
    }
  }
};

const Create2DArray = (rows, columns) => {
  var x = new Array(rows);
  for (var i = 0; i < rows; i++) {
    x[i] = new Array(columns).fill(0);
  }
  return x;
};
