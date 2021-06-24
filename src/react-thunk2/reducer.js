import {
    ADD,
    INS,
    POWER,
    RECOVERY,
    ASYNC
} from './constant'

const defaultState = {
    num: 0,
    asyncData: []
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD:
            return {
                ...state, ...{ num: state.num + action.num }
            }
        case INS:
            return {
                ...state, ...{ num: state.num - 1 }
            }
        case POWER:
            return {
                ...state, ...{ num: state.num * state.num }
            }
        case RECOVERY:
            return {
                ...state, ...{ num: 0 }
            }
        case ASYNC:
            return {
                ...state, ...{ asyncData: action.asyncData }
            }
        default:
            return state
    }
}

export default reducer