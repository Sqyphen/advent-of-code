// Day 1 : Part 1

"use_strict";

const fs = require("fs");

const fileData = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n")
  .map(Number);

let result;

fileData.forEach((first) => {
  fileData.forEach((second) => {
    const combine = first + second;
    if (combine === 2020) {
      result = first * second;
    }
  });
});

console.log(result);
