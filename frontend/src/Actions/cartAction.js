import axios from "axios";
import { CART_ADD_ITEM,CART_REMOVE_ITEM } from "../Constants/CartConstants";

export const addToCart = (id,qtyy) => async (dispatch,getState)=>{
    const url = "http://127.0.0.1:8000"
    const {data} = await axios.get(`http://127.0.0.1:8000/product/${id}`)
    const qty = parseInt(qtyy)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            Image:url + data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    }) 
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItem))
}

export const removeFromCart = (id) =>(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItem))
}