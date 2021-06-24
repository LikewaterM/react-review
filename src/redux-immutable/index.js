import React, { Component } from 'react'
import ShowInfo from './showInfo'
import InputBar from './inputBar'
import { Provider } from  'react-redux'
import store from './store'

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <InputBar />
                <br/>
                <ShowInfo />
            </Provider>
        )
    }
}

export default App