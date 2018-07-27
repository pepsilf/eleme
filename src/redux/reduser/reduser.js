let defaultState={
    adress:"正在定位中...",          //定位
    typeList:[],          //分类
    storeList:[],         //店铺列表
    adressList:[],        //地址列表
    city:"未选择",        //城市
    cityList:[],         //城市列表
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "GET_ADRESS_PENDING":                      //加载前
            let newAdressState=JSON.parse(JSON.stringify(state));
                newAdressState.adress="正在识别地址..."; //可以用来做loding
            return newAdressState;                           
        case "GET_ADRESS_FULFILLED":                    //加载后
            let newAdressStates=JSON.parse(JSON.stringify(state));
                newAdressStates.adress=action.payload;
            return newAdressStates; 

        case "GET_TYPE_PENDING":                                //加载类型列表
            let newTypeState=JSON.parse(JSON.stringify(state));
                newTypeState.typeList=[]; 
            return newTypeState;                           
        case "GET_TYPE_FULFILLED":                    
            let newTypeStates=JSON.parse(JSON.stringify(state));
                newTypeStates.typeList=action.payload;
            return newTypeStates;

        case "GET_STORE_LIST_PENDING":                  //加载餐厅列表          
            let newState=JSON.parse(JSON.stringify(state));
                
            return newState;     
        case "GET_STORE_LIST_FULFILLED":               
            let newStates=JSON.parse(JSON.stringify(state));
                newStates.storeList=[...newStates.storeList,...action.payload];
            return newStates;

        case "GET_ADRESS_LIST_PENDING":                  //加载地址列表          
            let newAdressListState=JSON.parse(JSON.stringify(state));
                newAdressListState.adressList=[];
            return newAdressListState;     
        case "GET_ADRESS_LIST_FULFILLED":               
            let newAdressListStates=JSON.parse(JSON.stringify(state));
                newAdressListStates.adressList=action.payload;
            return newAdressListStates;
        
        case "GET_CITY_PENDING":                                //加载地址列表          
            let newCityState=JSON.parse(JSON.stringify(state));
                newCityState.city="未选择";
            return newCityState;     
        case "GET_CITY_FULFILLED":               
            let newCityStates=JSON.parse(JSON.stringify(state));
                newCityStates.city=action.payload;
            return newCityStates;

        case "GET_CITY_LIST_PENDING":                                //加载地址列表          
            let newCityListState=JSON.parse(JSON.stringify(state));
                newCityListState.cityList=[];
            return newCityListState;     
        case "GET_CITY_LIST_FULFILLED":               
            let newCityListStates=JSON.parse(JSON.stringify(state));
                newCityListStates.cityList=action.payload;
            return newCityListStates;
            
        default:
            return state;
    }
    
}