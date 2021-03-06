// Day 6 : Part 1

"use_strict";

const fs = require("fs");

const puzzleData = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/^\n/gm);

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = [];

puzzleData.forEach((group) => {
  const answers = group.replace(/\n/g, "");
  let answerCount = 0;

  alphabet.split("").forEach((letter) => {
    if (answers.indexOf(letter) > -1) {
      answerCount = answerCount + 1;
    }
  });

  counts.push({
    answer: answers,
    count: answerCount,
  });
});

const totalCounts = counts
  .map((c) => c.count)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(totalCounts);
