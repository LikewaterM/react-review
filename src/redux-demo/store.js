const redux = require('redux')
const reduce = require('./reduce.js')

const store = redux.createStore(reduce)
store.subscribe(()=>{
	console.log(store.getState(),'---')
})

store.dispatch({type:'add'})
