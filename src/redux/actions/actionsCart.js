import http from "../../helpers/apiEcommerce"
import { setIsLoading } from "./actionsLoading"

export const actionsCart = {
    setOpenCart : "SET_OPEN_CART",
    setCartProduct: "SET_CART_PRODUCTS"
}

const setOpenCart = (isOpen) =>({
    type: actionsCart.setOpenCart,
    payload: isOpen
})
export const setCartProduct = (cart) => ({
    type: actionsCart.setCartProduct,
    payload: cart
})

// Thunk functions
export const setOpenCartThunk = (isOpen) => {
    return dispatch => {
        dispatch(setOpenCart(isOpen))
    }
}
export const addToCartThunk = (idProduct, quantity) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        const item ={id:idProduct, quantity:quantity}
        http.post("/cart",item)
            .then(() => dispatch(getCartThunk()))
            .catch(err => console.log(err.response))
            .finally(()=> {
                dispatch(setIsLoading(false))
                dispatch(setOpenCart(true))
            })
    }
}
export const getCartThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
        http.get("/cart")
            .then(({data}) => {
                dispatch(setCartProduct(data.data.cart.products))
            })
            .finally(()=>{
                dispatch(setOpenCart(true));
                dispatch(setIsLoading(false));
            })

    }
}