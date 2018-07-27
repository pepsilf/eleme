import React,{ Component } from "react"
import {connect} from "react-redux";
import Header from "../com/header"
import {getAdressListAction,getCityAction} from "../../redux/action/action"
import "./selectAddress.css"

class City extends Component{
    constructor(){
        super()
        this.state={
            title:"选择收货地址",
        }
    }
    render(){
        return(
            <div>
                <Header title={this.state.title} history={this.props.history.history}/>
                <div>  
                    <div className="selectAddress">
                        <div className="city" onClick={this.selectCity.bind(this)}>
                            <span>{this.props.city}</span>
                        </div>
                        <div className="search">
                        <input 
                            type="text" 
                            ref={(input)=>{this.input=input}}
                            onChange={this.props.getAdressList.bind(this)}
                            placeholder="请输入地址"
                        />
                        </div>
                    </div>
                    <ul className="adressList" id="adressList">
                        {
                            this.props.adressList.map((item,index)=>{
                                return(
                                    <li className="adressItem" key={Math.random()} onClick={this.getAdress.bind(this,item)}>
                                        <div className="adressName">
                                            <h3>{item.city}</h3>
                                            <span>{item.distance}</span>
                                        </div>
                                        <div className="adress">
                                            {item.address}
                                        </div>
                                    </li>
                                )
                            }) 
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        if(!this.input.value){
            
        }
        if(this.props.history.location.state){
            this.props.getCity()
        }
    }
    getAdress(item){
        this.props.history.history.push({
            pathname:"/home",
            state:item
        })  
    }
    selectCity(){
        this.props.history.history.push({
            pathname:"/city",
            state:this.props.city
        }) 
    }
}
const mapStateToProps=(state)=>({        //引入数据
    adressList:state.reducers.adressList,
    city:state.reducers.city,
})

const mapDispatchToProps=(dispatch)=>({ //异步获取数据需传入dispatch
    getAdressList:function(){
        let addressInfo=this.props.history.location.state?this.props.history.location.state:null
        getAdressListAction(dispatch,{val:this.input.value,addressInfo})
    },
    getCity:function(){
        let addressInfo=this.history.location.state?this.history.location.state:null
        getCityAction(dispatch,addressInfo)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(City)