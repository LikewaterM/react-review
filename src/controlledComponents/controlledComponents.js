import React,{Component} from 'react'

class ControlledComponents extends Component{
	constructor(props){
		super(props)
		this.inp = React.createRef()
	}
	
	state = {
		val:'hello'
	}
	
	handChange = (e) => {
		this.setState({
			val:e.target.value
		})
	}
	
	handInput = (e) => {
		console.log(this.inp.current.value)
	}
	
	render(){
		return(
		  <div>
		    受控组件
		    <input value={this.state.val} onChange={this.handChange}/>
			非受控组件
			<input ref={this.inp} onInput={this.handInput}/>
		  </div>
		)
	}
}

export default ControlledComponents