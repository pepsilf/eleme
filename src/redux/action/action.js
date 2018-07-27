import axios from "axios"               //引入axios

export const getStoreListAction=(dispatch,{val,addressInfo})=>{   //异步获取需传入dispatch
    dispatch({
        type:"GET_STORE_LIST",
        payload:new Promise(resolve=>{
            axios.get("/restapi/shopping/v3/restaurants",{
                params:{
                    latitude:addressInfo.latitude,
                    longitude:addressInfo.longitude,
                    offset:val,
                    limit:8,
                    extras:["activities","tags"],
                    extra_filters:"home",
                    rank_id:"9dd1379ab5e44b4aae341b066324d81a",
                    terminal:"h5",
                }
            })
            .then(function(response){
                resolve(response.data.items)
            })
            .catch(function(error){
                console.log(error)
            })
        })
    })
}

export const getAdressAction=(dispatch,{val,addressInfo})=>{
    dispatch({
        type:"GET_ADRESS",
        payload:new Promise(resolve=>{
            axios.get("/restapi/bgs/poi/reverse_geo_coding",{
                params:{
                    latitude:addressInfo.latitude,
                    longitude:addressInfo.longitude
                }
            })
            .then(function(response,addressInfo){  
                resolve(response.data.name)  
            })
            .catch(function(error){
                console.log(error)
            })
        })
    })
}

export const getTypeAction=(dispatch,{val,addressInfo})=>{
    dispatch({
        type:"GET_TYPE",
        payload:new Promise(resolve=>{ 
            axios.get("/restapi/shopping/openapi/entries",{
                params:{
                    latitude:addressInfo.latitude,
                    longitude:addressInfo.longitude,
                    templates:["main_template","favourable_template","svip_template"],
                    terminal:"h5"
                }
            })
            .then(function(response){  
                resolve(response.data[0].entries)  
            })
            .catch(function(error){
                console.log(error)
            })
        })
    })
}

export const getAdressListAction=(dispatch,{val,addressInfo})=>{
    dispatch({
        type:"GET_ADRESS_LIST",
        payload:new Promise(resolve=>{
            axios.get("/restapi/bgs/poi/search_poi_nearby_alipay",{
                params:{
                    keyword:val,
                    offset:0,
                    limit:20,
                    latitude:addressInfo?addressInfo.latitude:null,
                    longitude:addressInfo?addressInfo.longitude:null,
                }
            })
            .then(function(response){  
                resolve(response.data)  
            })
            .catch(function(error){
                console.log(error)
            })
        })
    })
}

export const getCityAction=(dispatch,addressInfo)=>{
    dispatch({
        type:"GET_CITY",
        payload:new Promise(resolve=>{
            axios.get("/restapi/bgs/poi/reverse_geo_coding",{
                params:{
                    latitude:addressInfo?addressInfo.latitude:null,
                    longitude:addressInfo?addressInfo.longitude:null,
                }
            })
            .then(function(response){  
                resolve(response.data.city)  
            })
            .catch(function(error){
                console.log(error)
            })
        })
    })
}

export const getCityListAction=(dispatch,addressInfo)=>{
    dispatch({
        type:"GET_CITY_LIST",
        payload:new Promise(resolve=>{
            axios.get("https://shadow.elemecdn.com/lib/city-list@0.0.2/city_list.js")
            .then(function(response){  
                resolve(response.data.cityList)  
            })
            .catch(function(error){
                console.log(error)
            })
        })
    })
}

