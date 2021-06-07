
let defaultState = {
	count: 0
}

const reduce = (count = defaultState.count, action) => {
	switch (action.type){
		case 'add':
		  return count + 1
		case 'subtraction':
		  return count - 1
		default:
		  return count
	}
}

module.exports = reduce