import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Repostigioning from '../src/react-router/repositioning'
// import reportWebVitals from './reportWebVitals';
// import Tcompon from './redux-thunk/index'
// import Thunk2 from './react-thunk2';
// import App from './immutable/index'
// import App from './redux-immutable'
// import App from './react-lazy';
import App from './react-hooks'
import store from '../src/reactRedux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
