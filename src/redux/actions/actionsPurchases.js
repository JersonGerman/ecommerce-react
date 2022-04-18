import http from "../../helpers/apiEcommerce"
import { setCartProduct } from "./actionsCart"
import { setIsLoading } from "./actionsLoading"

export const actionsPurchases = {
    isOpenPurchases : "SET_OPEN_PURCHASES",
    setPurchases: "SET_PURCHASES"
}

const setOpenPurchases = (isOpen) => ({
    type: actionsPurchases.isOpenPurchases,
    payload : isOpen
})
const setPurchases = (purchases) => ({
    type: actionsPurchases.setPurchases,
    payload: purchases
})


// THUNKS FUNCTIONS
export const setOpenPurchasesThunk = (isOpen) => {
    return dispatch => {
        dispatch(setOpenPurchases(isOpen))
    }
}

export const getAllPurchasesThunk = ()=>{
    return dispatch => {
        dispatch(setIsLoading(true));
        http.get("/purchases")
            .then(({data}) => dispatch(setPurchases(data.data.purchases)))
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const addPurchasesThunk = () =>{
    return dispatch => {
        dispatch(setIsLoading(true));
        http.post("/purchases",{})
            .then(()=>(
                dispatch(setCartProduct([]))
                
            ))
            .finally(dispatch(setIsLoading(false)))
    }
}