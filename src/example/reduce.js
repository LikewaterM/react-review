let defaultState = {
	count: 0,
	num: 'kk'
}

const ADD = 'add'
const SUB = 'subtraction'

const reduce = (state = defaultState, action) => {
	switch (action.type){
		case ADD:
		  return {...state, ...{count: state.count + 1}}
		case SUB:
		  return {...state, ...{count: state.count - 1}}
		default:
		  return state
	}
}

export default reduce