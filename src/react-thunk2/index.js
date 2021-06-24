import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Header from './header'

class Thunk2 extends Component{
    render(){
        return(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    }
}

export default Thunk2