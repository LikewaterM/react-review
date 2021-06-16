import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => (<div>这是主页</div>)
const Me = () => (<div>这是个人页面</div>)
const News = () => (<div>这是新闻页面</div>)

class BasicsRouter extends Component{
    render(){
        return(
            <div>
              <div>在浏览器地址栏输入地址路由</div>
              <Router>
                  <Route path='/' exact component={Home}/>
                  <Route path='/me' component={Me}/>
                  <Route path='/news' component={News}/>
              </Router>
            </div>
        )
    }
}

export default BasicsRouter