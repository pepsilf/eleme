import React, { Component } from 'react';
import {HashRouter as Router,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store/store"

//引入路由组件
import Home from "./Component/home/home"
import Find from "./Component/find/find"
import Order from "./Component/order/order"
import Mine from "./Component/mine/mine"
import City from "./Component/city/selectCity"
import Adress from "./Component/city/selectAddress"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" render={(history)=>{return <Redirect to="/home" history={history}/>}}></Route>
            <Route path="/home" render={(history)=>{return <Home history={history}/>}}></Route>
            <Route path="/find" render={(history)=>{return <Find history={history}/>}}></Route>
            <Route path="/order" render={(history)=>{return <Order history={history}/>}}></Route>
            <Route path="/mine" render={(history)=>{return <Mine history={history}/>}}></Route>
            <Route path="/city" render={(history)=>{return <City history={history}/>}}></Route>
            <Route path="/adress" render={(history)=>{return <Adress history={history}/>}}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
