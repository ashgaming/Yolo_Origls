import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './combineReducer'


const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : []
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

/*
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    ))
    
    */
    const store = createStore(reducer, initialState,
        applyMiddleware(...middleware))
        
export default store