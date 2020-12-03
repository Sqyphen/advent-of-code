// Day 3 : Part 1

"use_strict";

const fs = require("fs");

const puzzleData = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

const moveDown = 1;
const moveRight = 3;
const newPuzzleData = [...puzzleData];
const puzzleHeight = puzzleData.length;
const puzzleWidth = puzzleData[0].length;
const rightMax = Math.ceil(puzzleHeight * (moveRight / puzzleWidth));

let currX = 0;
let currY = 0;
let treeCount = 0;

// Build full puzzle map
for (let index = 0; index < rightMax; index++) {
  newPuzzleData.map((element, i) => {
    newPuzzleData[i] = `${element}${puzzleData[i]}`;
  });
}

// Traverse puzzle map
for (let index = 0; index < puzzleHeight; index++) {
  const char = newPuzzleData[currX].split("")[currY];
  currX = currX + moveDown;
  currY = currY + moveRight;

  if (char === "#") {
    treeCount++;
  }
}

console.log(treeCount);
