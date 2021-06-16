import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (<div>这是主页</div>)
const Me = () => (<div>这是个人页面</div>)
const News = () => (<div>这是新闻页面</div>)

class LinkRouter extends Component{
    render(){
        return(
            <div>
                
                <Router>
                <Link to='/'>主页</Link>
                <Link to='/me'>个人</Link>
                <Link to='/news'>新闻</Link>
                    <Route path='/' exact component={Home} />
                    <Route path='/me' component={Me} />
                    <Route path='/news' component={News} />
                </Router>
            </div>
        )
    }
}

export default LinkRouter