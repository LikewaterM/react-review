import React, {Component} from 'react'

export default class Form extends Component{
	state = {
		inpVal:''
	}
	
	inpChange = (e) => {
	  this.setState({
		  inpVal:e.target.value
	  })	
	}
	
	inpKeyUp = (e) => {
		if(e.keyCode === 13){
			this.getValEvent()
		}
	}
	
	btnClick = () => {
		this.getValEvent()
	}
	
	getValEvent = () => {
		this.props.onValTransmit(this.state.inpVal)
		this.setState({
			inpVal:''
		})
	}
	
	render(){
		return(
		  <div>
		    <input value={this.state.inpVal} onChange={this.inpChange} onKeyUp={this.inpKeyUp}/>
		    <button onClick={this.btnClick}>添加</button>
		  </div>
		)
	}
}