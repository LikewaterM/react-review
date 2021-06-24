import React, { Component } from 'react'
import ImmutableMap from './immutable-map'
import ImmutableList from  './immutable-list'
import ReactImmutable from './react-immutable/react-immutable'

class App extends Component{
    render(){
        return(
            <div>
                <div>
                    immutable是一种特殊的数据结构，不同于js中的深拷贝和浅拷贝，immutable不可修改，一旦修改
                    就会返回一个新的immutable，包含修改的数据，和未发生改变的数据结构。
                    实现原理就是持久化数据结构，在使用旧数据创建新数据的时候，
                    会保证旧数据同时可用且不变，同时为了避免深度复制复制所有节点的带来的性能损耗，
                    immutable使用了结构共享，即如果对象树种的一个节点发生变化，
                    只修改这个节点和受他影响的父节点，其他节点则共享
                </div>
                <ImmutableMap />
                <ImmutableList />
                <ReactImmutable />
            </div>
        )
    }
}

export default App