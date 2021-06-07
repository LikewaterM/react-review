import React,{Component} from 'react'

const hoc = (Com) => {
	return class extends Component{
		render(){
			return(
			  <Com title='名字' {...this.props}></Com>
			)
		}
	}
}

export default hoc