/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Valid smiley face examples:  :) :D ;-D :~)

const acceptSmiley = [')', 'D']

const countSmilyFace = (data) => {
	let result = []
	console.log('input data', data)


	for (let index = 0; index < data.length; index++) {
		const splitStr = data[index].split('');
		for (let k = 0; k < splitStr.length; k++) {
			if(acceptSmiley.includes(splitStr[k])) {
				result.push(data[index])
			}
		}
	}
	console.log(result)
	return result;
}

// countSmilyFace([';D', ':-(', ':-)', ';~)'])

module.exports = {
	countSmilyFace
}