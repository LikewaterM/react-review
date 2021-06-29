import React, { Component, Suspense } from 'react'

export default class App extends Component{
    state = {
        isShow: false
    }
    dynamicLoadingEv = () => {
        this.setState({
            isShow: true
        })
    }
    render(){
        const DynamicLoadingCom = React.lazy(() => import ('./dynamicLoadingCom'))
        const { isShow } = this.state
        return(
            <div>
                <button onClick={this.dynamicLoadingEv}>动态加载</button>
                {
                    isShow ? (
                        <Suspense fallback={<div>Loading...</div>}>
                            <DynamicLoadingCom />
                        </Suspense>
                    ) : null
                }
            </div>
        )
    }
}