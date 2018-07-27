import React,{ Component } from "react"
import {NavLink} from "react-router-dom"
import "./footer.css"
export default class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
            navList:[{title:"首页",path:"/home"},{title:"发现",path:"/find"},{title:"订单",path:"/order"},{title:"我的",path:"/mine"}]
        }
    }
    render(){
        return(
            <div className="footer">
                {
                   this.state.navList.map((item)=>{
                        return(
                            <NavLink to={item.path} activeClassName="active" key={Math.random()}>{item.title}</NavLink>
                        )
                   })
                }
            </div>
        )
    }
}