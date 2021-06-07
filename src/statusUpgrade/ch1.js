import React from 'react'

class Ch1 extends React.Component{
	componentDidMount(){
		this.props.onRead('这是传的参数')
	}
	render(){
		return(
		  <div>子元素1</div>
		)
	}
}

export default Ch1