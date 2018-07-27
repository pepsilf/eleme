import React,{ Component } from "react"
import {connect} from "react-redux";
import Header from "../com/header"
import Footer from "../com/footer"

class Order extends Component{
    constructor(){
        super()
        this.state={
            title:"订单",
        }
    }
    render(){
        return(
            <div>
                <Header title={this.state.title} history={this.props.history.history}/>
                <div>order</div>
                <Footer/>
            </div>
        )
    }
}
export default connect()(Order)