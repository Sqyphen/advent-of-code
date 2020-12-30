// Day 6 : Part 2

"use_strict";

const fs = require("fs");

const puzzleData = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/^\n/gm);

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = [];

puzzleData.forEach((group) => {
  const answers = group.split(/\n/).filter((el) => el != "");
  const answersRows = answers.length;
  let answerCount = 0;

  alphabet.split("").forEach((letter) => {
    let tempCount = 0;

    answers.forEach((answer) => {
      if (answer.indexOf(letter) > -1) {
        tempCount = tempCount + 1;
      }
    });

    if (tempCount === answersRows) {
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
