// Day 5 : Part 1

"use_strict";

const fs = require("fs");

const puzzleData = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

const rowMin = 0;
const rowMax = 127;
const colMin = 0;
const colMax = 7;

let maxSeatID = 0;

puzzleData.forEach((seat) => {
  let rowMinTemp = rowMin;
  let rowMaxTemp = rowMax;
  let colMinTemp = colMin;
  let colMaxTemp = colMax;
  const seatRegex = seat.match(/([FB]+)([RL]+)/);
  const [, rows, cols] = seatRegex;
  let row = 0;
  let col = 0;

  rows.split("").forEach((point, index) => {
    let rowRange = rowMaxTemp - rowMinTemp;
    let rowHalf = Math.floor(rowRange / 2) + 1;

    if (index === rows.length - 1) {
      if (point === "F") {
        row = rowMinTemp;
      } else if (point === "B") {
        row = rowMaxTemp;
      }
    } else if (point === "F") {
      rowMaxTemp = rowMaxTemp - rowHalf;
    } else if (point === "B") {
      rowMinTemp = rowMinTemp + rowHalf;
    }
  });

  cols.split("").forEach((point, index) => {
    let colRange = colMaxTemp - colMinTemp;
    let colHalf = Math.floor(colRange / 2) + 1;

    if (index === cols.length - 1) {
      if (point === "L") {
        col = colMinTemp;
      } else if (point === "R") {
        col = colMaxTemp;
      }
    } else if (point === "L") {
      colMaxTemp = colMaxTemp - colHalf;
    } else if (point === "R") {
      colMinTemp = colMinTemp + colHalf;
    }
  });

  const seatID = row * 8 + col;

  console.log(`${seat}: row ${row}, column ${col}, seat ID ${seatID}`);

  if (seatID > maxSeatID) {
    maxSeatID = seatID;
  }
});

console.log(maxSeatID);
