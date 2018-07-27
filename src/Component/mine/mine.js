import React,{ Component } from "react"
import {connect} from "react-redux";
import Header from "../com/header"
import Footer from "../com/footer"

class Mine extends Component{
    constructor(){
        super()
        this.state={
            title:"我的",
        }
    }
    render(){
        return(
            <div>
                <Header title={this.state.title} history={this.props.history.history}/>
                <div>mine</div>
                <Footer/>
            </div>
        )
    }
}
export default connect()(Mine)