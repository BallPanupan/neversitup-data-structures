
/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (data) => {
	const groupData = data.reduce((acc,curr) => {
		if(!acc[curr]){
			acc[curr] = []
		}
		acc[curr].push(curr)
		return acc
	}, {})
	
	let result = {
		lowKey: '',
		totalCount: Infinity
	}
	
	console.log(groupData);
	for (const [key, value] of Object.entries(groupData)) {
		
		if(value.length < result.totalCount && (value.length % 2) !== 0){
			result = {
				lowKey: key,
				totalCount: value.length
			}
		}
	
	}
	const shouldResult = `should return ${result.lowKey}, because it appears ${result.totalCount} time (which is odd).`
	console.log(shouldResult)
	return shouldResult
}

// const data = [1,2,2,3,3,3,4,3,3,3,2,2,1]
// const data = [1,1,2]
// const data = [0,1,0,1,0]
// const data = [1,2,2,3,3,3,4,3,3,3,2,2,1]

// findOddNumber(data)

module.exports = {
	findOddNumber
}

