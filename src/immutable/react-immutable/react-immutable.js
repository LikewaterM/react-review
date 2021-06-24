import React, { Component } from 'react'
import ShowContent from './showContent'
import { Map as IMap } from 'immutable'

class ReactImmutable extends Component{
    constructor(){
        super()
        this.state = {
            cart: IMap({})
        }
    }
    save = () => {
        const goodName = this.refs.good.value
        const goodNum = this.refs.number.value
        let newCart = this.state.cart.set(goodName, goodNum)
        this.setState({
            cart: newCart
        })
    }
    render(){
        return(
            <div>
                商品：<input type='text' ref='good' /><br/>
                数量：<input type='number' ref='number' /><br/>
                <button onClick={this.save}>保存</button>
                <br/>
                <ShowContent {...this.state}/>
            </div>
        )
    }
}

export default ReactImmutable