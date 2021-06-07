import React,{Component} from 'react'
import Ch1 from './ch1.js'
import Ch2 from './ch2.js'

class Parents extends Component{
	constructor(props) {
	    super();
		this.state = {
			val:''
		}
	}
	componentDidMount(){
		
	}
	chuancan(data){
		console.log(data,'data')
		this.setState({
			val:data
		})
	}
	render(){
		return(
		  <div>
		    <Ch1 onRead={this.chuancan.bind(this)}></Ch1>
			<Ch2 val={this.state.val}></Ch2>
		  </div>
		)
	}
}

export default Parents;