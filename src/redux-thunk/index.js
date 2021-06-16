import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Header from './header'

class Tcompon extends Component{
    render(){
        return(
            <Provider store={store}>
                <Header></Header>
            </Provider>
        )
    }
}

export default Tcompon