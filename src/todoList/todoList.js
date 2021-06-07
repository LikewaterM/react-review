import React, {Component} from 'react'

import Form from './form.js'
import List from './list.js'

export default class TodoList extends Component{
	state = {
		listData:[]
	}
	
	valTransmitEvent = (val) => {
		console.log(val,'val')
		this.setState({
			listData:[val,...this.state.listData]
		})
	}
	
	deleteLiEvent = (index) => {
		let arr = [...this.state.listData]
		arr.splice(index,1)
		this.setState({
			listData:arr
		})
	}
	
	render(){
		return(
		  <>
		    <Form onValTransmit={this.valTransmitEvent}></Form>
			<List listData={this.state.listData}  deleteLi={this.deleteLiEvent}></List>
		  </>
		)
	}
}