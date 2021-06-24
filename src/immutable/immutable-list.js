import React, { Component } from 'react'
import { List as IList } from 'immutable'

class ImmutableList extends Component{
    componentDidMount(){
        let list1 = IList(['a', 'b', 'c'])
        console.log(list1, 'list1')
        let list2 = list1.push('d')
        console.log(list2, 'list2')
        let list3 = list1.push('aaa')
        console.log(list3, 'list3')
        let list4 = list1.set(4, 'e')
        console.log(list4, 'list4')
        console.log(list1.size, 'list1-size')
        let list5 = list1.delete(1)
        console.log(list5, 'list5')
        let list6 = list1.insert(4, 'd')
        console.log(list6, 'list6')
    }
    render(){
        return(
            <div>
                <div>immutable--List</div>
                <div>
                    push：作用同数组
                    set：第一个参数是坐标，第二个参数是要插入的值
                    size：长度
                    delete：删除指定坐标的值，别名：remove
                    insert：作用同set，不同的是，set会在指定的坐标添加值，insert的坐标大于长度时，会在末尾添加值
                </div>
            </div>
        )
    }
}

export default ImmutableList