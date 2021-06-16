import React, { Component } from 'react'
import Div from './div'
import Button from './button'
import { connect } from 'react-redux'

class App extends Component{
    state = {
        content:'这是传递的参数',
        btnText:'add'
    }
    addEv = () => {
      this.props.addDispatch(this.state.content)
    }

    render(){
        const { btnText, content } = this.state
        const { count } = this.props
        return(
            <div>
               <Button btntext={btnText} onClick={this.addEv}></Button>
               <Div content={count}></Div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
      count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      addDispatch:(val)=>{
          dispatch({type: 'add', value: val})
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)