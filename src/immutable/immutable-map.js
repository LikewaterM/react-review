import React, { Component } from 'react'
import { 
    Map as IMap
 } from 'immutable'

class ImmutableMap extends Component{
    componentDidMount(){
        let map1 = IMap({
            a: 0,
            b: 2
        })
        console.log(map1,'map1')
        let map2 = map1.set('a', 100)
        console.log(map2, 'map2')
        console.log(map2.get('a'), 'map2.get')
        console.log(map1.get('a'), 'map1.get')
        console.log(map1 == map2)

        
    }
    render(){
        return(
            <div>
                <div>immutable--Map</div>
            </div>
        )
    }
}

export default ImmutableMap