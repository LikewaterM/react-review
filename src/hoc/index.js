import React,{Component} from 'react'
import hoc from './hoc.js'

class App extends Component{
	render(){
		return(
		  <div>你好啊{this.props.msg}</div>
		)
	}
	
	componentDidMount(){
		console.log(this,'this')
	}
}

export default hoc(App)