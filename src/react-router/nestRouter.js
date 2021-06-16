import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (<div>这是主页</div>)
const Me = () => (<div>这是个人页面</div>)

const List = (props) => {
    console.log(props,'props')
    return(
        <div>
            {props.match.url}
        </div>
    )
}

class News extends Component{
    render(){
        return(
          <div>
              <Router>
                  <Link to='/news/新闻列表'>新闻列表</Link>
                  <Link to='/news/新闻先知'>新闻先知</Link>
                  <Link to='/news/新闻热点'>新闻热点</Link>
                  <Route path='/news/:id' component={List} />
              </Router>
          </div>
        )
    }
}

class NestRouter extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Link to='/'>首页</Link><br/>
                    <Link to='/me'>个人</Link><br/>
                    <Link to='/news'>新闻</Link>
                    <Route path='/' exact component={Home} />
                    <Route path='/me't component={Me} />
                    <Route path='/news' component={News} />
                </Router>
            </div>
        )
    }
}

export default NestRouter