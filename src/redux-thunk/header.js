import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store'

class Header extends Component{
    addEv = () => {
        this.props.addDispatch()
    }
    insEv = () => {
        store.dispatch(this.props.insDispatch())
    }
    render(){
        const { count } = this.props
        return(
            <div>
                <div>{count}</div>
                <button onClick={this.addEv}>加</button>
                <button onClick={this.insEv}>减</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        count: state.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        addDispatch: () => {
            dispatch({type: 'add'})
         },
         insDispatch: () => {
            return (dispatch) => {
                setTimeout(() => {
                    dispatch({type: 'ins'})
                }, 2000)
            }
         }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)