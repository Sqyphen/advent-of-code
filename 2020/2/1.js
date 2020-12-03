// Day 2 : Part 1

'use_strict';

const fs = require('fs');

const puzzleData = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let validPasswordCount = 0;

puzzleData.forEach(puzzle => {
	const result = puzzle.match(/(\d?\d)-(\d?\d) (.): (.*)/);
	const min = result[1];
	const max = result[2];
	const char = result[3];
	const password = result[4];
	const charCheck = password.match(new RegExp(char, "g"));
	const charCount = (charCheck) ? charCheck.length : 0;

	if(charCount >= min && charCount <= max){
		validPasswordCount++;
	}
	
});

console.log(validPasswordCount);
