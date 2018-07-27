import React,{ Component } from "react"
import "./header.css"

export default class Footer extends Component{
    render(){
        return(
            <div className="header">
               <div className="goBack" onClick={this.goBack.bind(this)}>{"<"}</div>
               <div className="title">{this.props.title}</div>
            </div>
        )
    }
    goBack(){
        this.props.history.goBack()
    }
}