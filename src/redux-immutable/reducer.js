import { combineReducers } from "redux-immutable";
import { Map as IMap } from 'immutable'

let defaultState = {
    stateMap: IMap({})
}

const reducer = (state = IMap({}), action) => {
    console.log(state, 'state')
    console.log(action, 'action')
    switch(action.type){
        case 'save':
            return state.set(action.payload.goodName, action.payload.num)
        default:
            return state
    }
}

const reducers = combineReducers({
    reducer
})

export default reducers