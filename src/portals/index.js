import React, { Component } from 'react'
import Modal from './modal.js'

class App extends Component{
	state = {
		isModalShow:false
	}
	
	modalEv = () => {
		this.setState({
			isModalShow:!this.state.isModalShow
		})
	}
	
	clone = () => {
		this.setState({
			isModalShow:!this.state.isModalShow
		})
	}
	
	render(){
		return(
		  <div>
		    <button onClick={this.modalEv}>模态框</button>
			<Modal onClose={this.clone} isShow={this.state.isModalShow}></Modal>
		  </div>
		)
	}
}

export default App