import React, {Component} from 'react'

export default class List extends Component{
	render(){
		return(
		  <ul>
		    {this.props.listData.map((item,index) => <li key={index} onClick={()=>{this.props.deleteLi(index)}}>{item}</li>)}
		  </ul>
		)
	}
}