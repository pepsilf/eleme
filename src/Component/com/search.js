import React,{ Component } from "react"
import "./search.css"

export default class Footer extends Component{
    render(){
        return(
            <div className="searchHeader">
               <div className="top" onClick={this.selectCity.bind(this)}>{this.props.adress}</div>
               <div className="search">搜索饿了么商家、商品名称</div>
            </div>
        )
    }
    selectCity(){
        this.props.history.push({
            pathname:"/adress",
            state:this.props.history.location.state
        })
    }
}