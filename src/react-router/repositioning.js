import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

const Home = () => (<div>这是主页</div>)
const Me = () => (<div>这是个人页面</div>)
const News = () => (<div>这是新闻页面</div>)
const Notfound = () => (<div>未找到该页面</div>)

class Repostigioning extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Link to='/'>主页</Link>
                    <Link to='/me'>个人</Link>
                    <Link to='/news'>新闻</Link>
                  <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/me' component={Me}/>
                    <Route path='/news' component={News}/>
                    <Route path='/notfound' component={Notfound} />
                    <Redirect from='/' to='/notfound'></Redirect>
                  </Switch>
                </Router>
            </div>
        )
    }
}

export default Repostigioning