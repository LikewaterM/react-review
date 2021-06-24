import React, { Component } from 'react'

class ShowContent extends Component{
    shouldComponentUpdate(nextProps){
        return !nextProps.cart.equals(this.props.cart)
    }
    render(){
        const { cart } = this.props
        let liArr = []
        cart.forEach((key, item) => {
            liArr.push(<li>商品：{item}  数量：{key}</li>)
        })
        return(
            <div>
                <ul>
                    {
                       liArr 
                    }
                </ul>
            </div>
        )
    }
}

export default ShowContent