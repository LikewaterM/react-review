import { ADD, ASYNC, INS, POWER } from "./constant"
import axios from 'axios'

const addAction = (val) => {
    return {
        type: ADD,
        num: val
    }
}

const insAction = () => {
    return {
        type: INS
    }
}

const powerActon = () => {
    return {
        type: POWER
    }
}

const asyncAction = () => {
    return (dispatch, getState) => {
        axios.get("./asyncData.json")
            .then(res => {
                console.log(res, 'res')
                dispatch({
                    type: ASYNC,
                    asyncData: res.data.list
                })
            })
    }
}

export {
    addAction,
    insAction,
    powerActon,
    asyncAction
}
