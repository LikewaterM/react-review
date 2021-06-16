import React, { Component } from 'react'
import store from './store.js'

class App extends Component{
	subtractionEv = () => {
		store.dispatch({
			type:'subtraction'
		})
	}
	addEv = () => {
		store.dispatch({
			type:'add'
		})
	}
	componentDidMount(){
		console.log('componentDidMount:')
	}
	render(){
		console.log('render:')
		// console.log(store.getState(),'store.getState()')
		return(
		  <div>
		    <button onClick={this.subtractionEv}>-</button>
			<span>{store.getState().count}</span>
			<button onClick={this.addEv}>+</button>
		  </div>
		)
	}
}

export default App