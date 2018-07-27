//applyMiddleware用来处理中间件  action 到  dispatch之间的一个应用
import {createStore,combineReducers,applyMiddleware} from "redux"
import reducers from "../reduser/reduser"

//这个是用来处理异步的action
import reduxpromisemiddleware from "redux-promise-middleware"

let reducer=combineReducers({
    reducers
})

let store=createStore(reducer,applyMiddleware(reduxpromisemiddleware()))

export default store




