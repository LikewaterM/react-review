import React, { Component } from 'react'
import { connect } from 'react-redux'

class InputBar extends Component{
    save = () => {
        const goodName = this.refs.good.value
        const num = this.refs.number.value
        this.props.saveDispatch({
            goodName,
            num
        })
    }
    render(){
        return(
            <div>
                商品：<input type='text' ref='good' /><br/>
                数量：<input type='number' ref='number' /><br/>
                <button onClick={this.save}>保存</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        saveDispatch: (json) => {
            return dispatch({
                type: 'save',
                payload: json
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(InputBar)