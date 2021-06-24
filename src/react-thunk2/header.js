import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    addAction,
    insAction,
    powerActon,
    asyncAction
} from './actions'

class Header extends Component{
    addEv = (val) => {
        this.props.addDispatch(val)
    }
    insEv = () => {
        this.props.insDispatch()
    }
    powerEv = () => {
        this.props.powerDispatch()
    }
    asyncEv= () => {
        this.props.asyncDispatch()
    }
    render(){
        const { num, asyncData } = this.props
        return(
            <div>
                <div>{num}</div>
                <button onClick={()=>this.addEv(1)}>加1</button>
                <button onClick={()=>this.addEv(2)}>加2</button>
                <button onClick={this.insEv}>减1</button>
                <button onClick={this.powerEv}>乘方</button>
                <button onClick={this.asyncEv}>获取异步数据</button>
                <ul>
                    {
                        asyncData.map((item, key) => {
                            return <li key={key}>{item.item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        num: state.num,
        asyncData: state.asyncData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDispatch: (val) => {
            dispatch(addAction(val))
        },
        insDispatch: () => {
            dispatch(insAction())
        },
        powerDispatch: () => {
            dispatch(powerActon())
        },
        asyncDispatch: () => {
            dispatch(asyncAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)