// Day 4 : Part 2

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

const isPassportValid = (passport) => {
  let valid = true;

  // (Birth Year) - four digits; at least 1920 and at most 2002
  if (passport.byr < 1920 || passport.byr > 2002) {
    valid = false;
  }

  //( Issue Year) - four digits; at least 2010 and at most 2020
  if (passport.iyr < 2010 || passport.iyr > 2020) {
    valid = false;
  }

  // (Expiration Year) - four digits; at least 2020 and at most 2030
  if (passport.eyr < 2020 || passport.eyr > 2030) {
    valid = false;
  }

  // (Height) - a number followed by either cm or in:
  // If cm, the number must be at least 150 and at most 193.
  // If in, the number must be at least 59 and at most 76.
  const hgtRgx = passport.hgt.match(/(\d+)(cm|in)/);
  if (hgtRgx && hgtRgx.length === 3) {
    const [, num, measure] = hgtRgx;
    if (measure === "cm") {
      if (num < 150 || num > 193) {
        valid = false;
      }
    } else if (measure === "in") {
      if (num < 59 || num > 76) {
        valid = false;
      }
    } else {
      valid = false;
    }
  } else {
    valid = false;
  }

  // (Hair Color) - a # followed by exactly six characters 0-9 or a-f
  if (passport.hcl.match(/^#[0-9a-f]{6}$/) === null) {
    valid = false;
  }

  // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth
  if (passport.ecl.match(/^amb|blu|brn|gry|grn|hzl|oth$/) === null) {
    valid = false;
  }

  // (Passport ID) - a nine-digit number, including leading zeroes
  if (passport.pid.match(/^\d{9}$/) === null) {
    valid = false;
  }

  return valid;
};

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
    return isPassportValid(passport);
  }
});

console.log(validPassports.length);
