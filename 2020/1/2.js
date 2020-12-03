// Day 1 : Part 2

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
    fileData.forEach((third) => {
      const combine = first + second + third;
      if (combine === 2020) {
        result = first * second * third;
      }
    });
  });
});

console.log(result);
