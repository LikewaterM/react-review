
let defaultState = {
    count:0
}

const reducer = (state = defaultState, action) => {
    console.log(action,'action')
    switch (action.type){
        case 'add':
            return {
                ...state, ...{ count: state.count + 1 }
            }
        case 'ins':
            return {
                ...state, ...{ count: state.count - 1 }
            }
        default:
            return state
    }
}

export default reducer