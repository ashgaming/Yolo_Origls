import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productDetailsReducers } from './Reducers/productReducers'
import { cartReducer } from "./Reducers/cartReducers"
import { orderCreateReducer,orderDetailsReducer,orderPayReducer,myorderlistReducer } from "./Reducers/orderReducers"
import {
    userLoginReducers,
    userRegisterReducers,
    userDetailsReducers,
    userUpdateProfileReducers,
    userListReducer,
} from "./Reducers/userReducers";

const reducer = combineReducers({
    productlist: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdateProfile: userUpdateProfileReducers,
    userList:userListReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    myorderlist:myorderlistReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
//const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'))
console.log('cartItemsFromStorage',cartItemsFromStorage)

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : []
const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage,
        paymentMethod:paymentMethodFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store