import React,{ Component } from "react"
import {connect} from "react-redux";
import Search from "../com/search"
import Footer from "../com/footer"
import "./home.css"
import {getStoreListAction,getAdressAction,getTypeAction} from "../../redux/action/action"
import IScroll from "iscroll/build/iscroll-probe";

import { Carousel, WingBlank } from 'antd-mobile';//引入外部组件
import 'antd-mobile/dist/antd-mobile.css';
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[1,2],
            offset:0,
            lastScrollY:0
        }
    }
    render(){
        console.log(this.props.storeList)
        return(
            <div className="home">
                <Search adress={this.props.adress} history={this.props.history.history}/>
                <div id="wrapper">
                    <div id="scroller">
                        <div className="main">
                            <WingBlank>
                                <Carousel autoplay={false} infinite>
                                    {
                                        this.state.data.map((items,indexs)=>{
                                            if(indexs===0){
                                                return(
                                                    <ul className="nav" key={Math.random}>
                                                        {
                                                            this.props.typeList.map((item,index)=>{
                                                                if(index<10){
                                                                    return <li key={index}>
                                                                        <img alt="logo" src={this.pathImg(item.image_hash)}/>
                                                                        <span>{item.name}</span>
                                                                    </li>
                                                                }else{
                                                                    return null
                                                                }
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }else{
                                                return(
                                                    <ul className="nav navs" key={Math.random}>
                                                        {
                                                            this.props.typeList.map((item,index)=>{
                                                                if(index>=10){
                                                                    return <li key={index}>
                                                                        <img alt="logo" src={this.pathImg(item.image_hash)}/>
                                                                        <span>{item.name}</span>
                                                                    </li>
                                                                }else{
                                                                    return null
                                                                }
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }
                                        })
                                    }
                                </Carousel>
                            </WingBlank>
                            <div className="banner">
                                <div className="banner_left">
                                    <div>
                                        <h3>品质套餐</h3>
                                        <span>搭配齐全吃的好</span>
                                        <span>立即抢购></span>
                                    </div>
                                    <img alt="" src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png"/>
                                </div>
                                <div className="banner_right">
                                    <div>
                                        <h3>品质套餐</h3>
                                        <span>搭配齐全吃的好</span>
                                        <span>立即抢购></span>
                                    </div>
                                    <img alt="" src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png"/>
                                </div>
                            </div>
                            <div className="recommend">推荐商家</div>
                            <ul className="filter">
                                <li>综合排序</li>
                                <li>好评优先</li>
                                <li>距离最近</li>
                                <li>筛选</li>
                            </ul>
                            <ul>
                                {
                                    this.props.storeList.map((item,index)=>{
                                        return(
                                            <li className="storeItem" key={Math.random()}>
                                                <div className="goods">
                                                    <div className="logo">
                                                        <img alt="logo" src={this.pathImg(item.restaurant.image_path)}/>
                                                    </div>
                                                    <div className="goodsInfo">
                                                        <div className="storeName">
                                                            <span>品牌</span>
                                                            <h3>{item.restaurant.name}</h3>
                                                            <div>
                                                                <span>保</span>
                                                            </div>
                                                        </div>
                                                        <div className="score">
                                                            <span>{item.restaurant.rating}</span>
                                                            <span>月售{item.restaurant.recent_order_num}单</span>
                                                            <div>
                                                                <span>青鸟专送</span>
                                                            </div>
                                                        </div>
                                                        <div className="offerPrice">
                                                            <div>
                                                                <span>¥35起送</span>
                                                                <span>{item.restaurant.piecewise_agent_fee.description}</span>
                                                            </div>
                                                            <div>
                                                                <span>{(item.restaurant.distance/1000).toFixed(2)}km</span>
                                                                <span>{item.restaurant.order_lead_time}分钟</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="activity">
                                                    <span className="first">首</span>
                                                    <span>{item.restaurant.activities[0].description?item.restaurant.activities[0].description:""}</span>
                                                    <div>
                                                        <span>{item.restaurant.activities.length}个活动</span>
                                                    </div>
                                                </div>
                                                <div className="activity">
                                                    <span className="moredel">减</span>
                                                    <span>{item.restaurant.activities[1]?item.restaurant.activities[1].description:""}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    componentDidMount(){
        if(this.props.history.location.state){
            this.props.getHomeData({val:0,addressInfo:this.props.history.location.state})
        }else{
            setTimeout(()=>{
                this.props.history.history.push("/adress")
            },3000)
        }
    }
    componentDidUpdate(){
        this.myScroll = new IScroll("#wrapper",{probeType: 1, mouseWheel: true ,startY:this.state.lastScrollY})
        this.myScroll.on("scrollEnd",this.myScrolls.bind(this))
    }
    componentWillUnmount(){
        this.myScroll=null          //组件注销时需要销毁注册的事件
    }

    pathImg(path){              //处理图片路径
        let url="https://fuss10.elemecdn.com/"
        let imgPath=url+path[0]+"/"+path[1]+"/"+path[2]+"/"+path.substring(3)
        if(path.indexOf("jpeg")!==-1){
            imgPath+=".jpeg"
        }else{
            imgPath+=".png"
        }
        return imgPath
    }
    myScrolls(){
        if(this.myScroll.maxScrollY===this.myScroll.y&&this.myScroll.maxScrollY!==this.state.lastScrollY){
            console.log(this.myScroll)
            this.setState({
                offset:this.state.offset+8,
                lastScrollY:this.myScroll.y
            }) 
            this.props.getMoreStore({val:this.state.offset,addressInfo:this.props.history.location.state})
        }    
    } 
}
const mapStateToProps=(state)=>({        //引入数据
    storeList:state.reducers.storeList,
    adress:state.reducers.adress,
    typeList:state.reducers.typeList,
})

const mapDispatchToProps=(dispatch)=>({ //异步获取数据需传入dispatch
    getHomeData:function(addressInfo){
        getAdressAction(dispatch,addressInfo)
        getStoreListAction(dispatch,addressInfo) 
        getTypeAction(dispatch,addressInfo)
    },
    getMoreStore:function(addressInfo){
        getStoreListAction(dispatch,addressInfo) 
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)