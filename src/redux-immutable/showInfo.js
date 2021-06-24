import React, { Component } from 'react'
import { connect } from 'react-redux'
import reducers from './reducer'

class ShowInfo extends Component{
    render(){
        const { liMap } = this.props
        let liArr = []
        liMap.forEach((key, item)=>{
            liArr.push(<li>商品：{item} - 数量：{key}</li>)
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

const mapStateToProps = (state, ownProps) => {
    // console.log(state.get('reducer'), 'state')
    return{
        liMap: state.get('reducer')
    }
}

export default connect(mapStateToProps, null)(ShowInfo)