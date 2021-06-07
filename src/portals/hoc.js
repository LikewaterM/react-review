import React, { Component } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import './hoc.css'

function getElement(isShow){
	let div = document.createElement('div')
	let body = document.querySelector('body')
	div.id = 'mask'
	if(isShow){
		div.classList.add('mask')
		body.appendChild(div)
	}else{
		var mask = document.getElementById("mask")
		if(mask){
			mask.remove()
		}
	}
	return div
}

const hoc = (Assembly) => {
	return class extends Component{
		render(){
			return ReactDOM.createPortal(
			  <Assembly {...this.props}/>,
			  getElement(this.props.isShow)
			)
		}
	}
}

export default hoc