import React, { Component } from 'react'
import hoc from './hoc.js'

class Modal extends Component{
	
	cloneModalEv = () => {
		this.props.onClose()
	}
	
	render(){
		return(
		  <div>
		    {
			  this.props.isShow ? (
				<div className='modal'>
				  <button onClick={this.cloneModalEv}>关闭</button>
				</div>
			  ) : null
		    }
		  </div>
		)
	}
}

export default hoc(Modal)