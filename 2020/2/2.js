// Day 2 : Part 2

'use_strict';

const fs = require('fs');

const puzzleData = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let validPasswordCount = 0;

puzzleData.forEach(puzzle => {
	const result = puzzle.match(/(\d?\d)-(\d?\d) (.): (.*)/);
	const [ match, first, second, char, password ] = result;
	const passwordArray = password.split('');
	const firstChar = passwordArray[first - 1];
	const secondChar = passwordArray[second - 1];

	if((firstChar === char || secondChar === char) && (firstChar !== secondChar)){
		validPasswordCount++;
	}
});

console.log(validPasswordCount);
