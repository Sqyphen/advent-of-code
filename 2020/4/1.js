// Day 4 : Part 1

"use_strict";

const fs = require("fs");

const puzzleData = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(/^\n/gm);

// Prepare passport data
const passportData = puzzleData.map((passport) => {
  const passportObj = {};
  const result = passport.match(/(\S+):(\S+)/gm);
  result.map((item) => {
    const itemSplit = item.split(":");
    passportObj[itemSplit[0]] = itemSplit[1];
  });
  return passportObj;
});

// Check all passports
const validPassports = passportData.filter((passport) => {
  const passportKeys = Object.keys(passport);
  if (
    passportKeys.includes("byr") &&
    passportKeys.includes("iyr") &&
    passportKeys.includes("eyr") &&
    passportKeys.includes("hgt") &&
    passportKeys.includes("hcl") &&
    passportKeys.includes("ecl") &&
    passportKeys.includes("pid")
  ) {
    return true;
  }
});

console.log(validPassports.length);
