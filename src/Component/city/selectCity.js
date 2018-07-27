import React,{ Component } from "react"
import {connect} from "react-redux"
import Header from "../com/header"
import {getCityListAction} from "../../redux/action/action"
import "./selectCity.css"

import IScroll from "iscroll/build/iscroll-probe";
class City extends Component{
    constructor(){
        super()
        this.state={
            title:"城市选择",
            newCityList:[],
            static:"block"
        }
    }
    render(){
        let statics=this.props.history.location.state
        return(
            <div>
                <Header title={this.state.title} history={this.props.history.history}/>
                <div>  
                    <div className="selectCity">
                        <div className="search">
                            <input type="text" onChange={this.filter.bind(this)} ref={(input)=>{this.input=input}} placeholder="输入城市名、拼音或首字母查询"/>
                        </div>
                    </div>
                    <div id="wrapper">
                        <div id="scroller">
                                <div className="cities" style={{display:this.state.static}}>
                                    <div className="cityList" style={{display:statics&&statics!=="未选择"?"block":"none"}}>
                                        <div className="initial">当前定位城市</div>
                                        <div className="currentCity">{this.props.history.location.state}</div>
                                    </div>
                                    {
                                        this.props.cityList.map((item,index)=>{
                                            return(
                                                <div className="cityList" key={Math.random()}>
                                                    <div className="initials" key={Math.random()}>{item.idx}</div>
                                                    <ul className="cityItem" key={Math.random()}>
                                                        {
                                                            item.cities.map((items)=>{
                                                                return(
                                                                    <li onClick={this.getCity.bind(this,items)} key={Math.random()}>{items.name}</li> 
                                                                )
                                                            })
                                                        }
                                                    </ul>  
                                                </div>
                                            )
                                        }) 
                                    }
                                </div>
                                <ul className="newCityList" style={{display:this.state.static==="block"?"none":"block"}}>
                                    {
                                        this.state.newCityList.map((item)=>{
                                            return(
                                                <li onClick={this.getCity.bind(this,item)} key={Math.random()}>{item.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                        </div>
                    </div>
                    <ul className="selectList">
                        {
                            this.props.cityList.map((item,index)=>{
                                return(
                                    <li key={Math.random()} onClick={this.myScrolls.bind(this,index)}>{item.idx}</li>
                                )
                            })
                        }
                    </ul> 
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getCityList()
    }
    componentDidUpdate(){
        this.myScroll = new IScroll("#wrapper",{probeType: 1, mouseWheel: true})
    }
    componentWillUnmount(){
        this.myScroll=null          //组件注销时需要销毁注册的事件
    }
    myScrolls(index){               //楼梯效果
        var oList=document.getElementsByClassName("initials")
        this.myScroll.scrollTo(0,-oList[index].offsetTop) 
    } 
    getCity(items){
        this.props.history.history.push({
            pathname:"/adress",
            state:items
        }) 
    }
    filter(){ 
        this.setState({
            static:"block"
        })
        var arr=[]
        if(this.input.value){
            this.props.cityList.map((item)=>{
                item.cities.map((items)=>{
                    if((items.name.indexOf(this.input.value)!==-1)||(items.pinyin.indexOf(this.input.value)!==-1)){
                        arr.push(items)
                    }
                    return items
                })
                return item
            })
        }
        if(arr.length){
            this.setState({
                static:"none"
            })
        }
        this.setState({
            newCityList:arr
        })
    }
}
const mapStateToProps=(state)=>({        //引入数据
    cityList:state.reducers.cityList,
})

const mapDispatchToProps=(dispatch)=>({ //异步获取数据需传入dispatch
    getCityList:function(){
        getCityListAction(dispatch)
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(City)



