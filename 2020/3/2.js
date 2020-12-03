// Day 3 : Part 2

"use_strict";

const fs = require("fs");

const puzzleData = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

const newPuzzleData = [...puzzleData];
const puzzleHeight = puzzleData.length;
const puzzleWidth = puzzleData[0].length;
const traversals = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

const maxRightTraversal = Math.max(...traversals.map((t) => t.right));
const rightMax = Math.ceil(puzzleHeight * (maxRightTraversal / puzzleWidth));

// Build full puzzle map
for (let index = 0; index < rightMax; index++) {
  newPuzzleData.map((element, i) => {
    newPuzzleData[i] = `${element}${puzzleData[i]}`;
  });
}

traversals.map((traversal) => {
  traversal.count = traverseSlope(
    newPuzzleData,
    traversal.right,
    traversal.down
  );
});

const result = traversals.map((t) => t.count).reduce((a, b) => a * b);

console.log(result);

// Traverse puzzle map
function traverseSlope(puzzleMap, right, down) {
  let currX = 0;
  let currY = 0;
  let treeCount = 0;

  for (let index = 0; index <= (puzzleHeight - 1) / down; index++) {
    const char = puzzleMap[currX].split("")[currY];
    currY = currY + right;
    currX = currX + down;

    if (char === "#") {
      treeCount++;
    }
  }

  return treeCount;
}
