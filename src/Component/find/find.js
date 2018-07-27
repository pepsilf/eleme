import React,{ Component } from "react"
import {connect} from "react-redux";
import Header from "../com/header"
import Footer from "../com/footer"

class Find extends Component{
    constructor(){
        super()
        this.state={
            title:"发现",
        }
    }
    render(){
        return(
            <div>
                <Header title={this.state.title} history={this.props.history.history}/>
                <div>find</div>
                <Footer />
            </div>
        )
    }
}
export default connect()(Find)