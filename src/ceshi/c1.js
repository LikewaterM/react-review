import React, {Component} from 'react'
import Ctwo from './c2.js'

export default class Cone extends Component{
	state = {
		showModel:false
	}
	
	modelEv = () => {
		this.setState({
			showModel:true
		})
	}
	
	cloneModel = () => {
		this.setState({
			showModel:false
		})
	}
	
	render(){
		return(
		  <div>
		    <button onClick={this.modelEv}>模态框</button>
			<Ctwo show={this.state.showModel} clone={this.cloneModel}></Ctwo>
		  </div>
		)
	}
}