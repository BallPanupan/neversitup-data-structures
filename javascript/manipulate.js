/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */

const readline = require('readline');
var permArr = [],
  usedChars = [];

	function permute(input) {
		var i, ch;
		for (i = 0; i < input.length; i++) {
			ch = input.splice(i, 1)[0];
			usedChars.push(ch);
			if (input.length == 0) {
				permArr.push(usedChars.slice());
			}
			permute(input);
			input.splice(i, 0, ch);
			usedChars.pop();
		}
		return permArr
	};


const manipulate = (input) => {
	const rl = readline.createInterface(
		process.stdin,
		process.stdout
	);

	const splitStr = input.split('');
	const raw = permute(splitStr)

	const result = raw.map(data => data.join(''))

	console.log(result)
	return result
}

// manipulate('abc')

module.exports = {
	manipulate
}