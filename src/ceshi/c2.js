import React, {Component} from 'react';
import './c2.css';

export default class Ctwo extends Component{
	
	btnClick = (e) => {
		this.props.clone()
	}
	
	render(){
		return(
		  <div className={this.props.show?'div2':'div3'}>
		    <div className='div1'>
			  <p></p>
			  <button onClick={this.btnClick} >关闭</button>
			</div>
		  </div>
		)
	}
}