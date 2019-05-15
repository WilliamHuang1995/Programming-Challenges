# Blocks

Given a 2x2 Matrix, create an algorithm that calculates how many blocks is inside this Matrix. A block consists of adjacent ones. Diagonals do not count.

## Example

```Javascript
var map = [
  [1, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1]
];
```

In this example there is three blocks. One block on the left, one in the middle shaped like an U, and one single 1 that is itself a block.

## Solution

Check out my solution to the question by viewing `block.js`. Run the code with `node index.js`
