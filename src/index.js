import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parents from './example/index'
// import reportWebVitals from './reportWebVitals';
import store from '../src/example/store.js'

function fn(){
	ReactDOM.render(
	  <Parents/>,
	  document.getElementById('root')
	)
}
store.subscribe(fn)
fn()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
