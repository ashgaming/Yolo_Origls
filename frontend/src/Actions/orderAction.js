import {
ORDER_CREATE_REQUEST,
ORDER_CREATE_SUCCESS,
ORDER_CREATE_FAIL,
} from '../Constants/orderConstants'
import {CART_CLEAR_ITEMS} from '../Constants/CartConstants'
import axios from 'axios'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const {
             userLogin: { userInfo },
             } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`http://127.0.0.1:8000/api/orders/add/`,order,
            config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

        dispatch({
            type: CART_CLEAR_ITEMS,
            payload: data
        })

        localStorage.removeItem('cartItems')
    }
    catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}