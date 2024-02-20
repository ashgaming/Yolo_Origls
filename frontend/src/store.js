import {createStore , combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers,productDetailsReducers } from './Reducers/productReducers'
import { cartReducer } from "./Reducers/cartReducers";

const reducer = combineReducers({
    productlist: productListReducers,
    productDetails: productDetailsReducers,
    cart:cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
JSON.parse(localStorage.getItem('cartItems')) : []
console.log('cartItemsFromStorage',cartItemsFromStorage)
const initialState = {
    cart:{cartItems:cartItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store