import { actionsCart } from "../actions/actionsCart";

const INITIAL_STATE = {
    isOpenCart : false,
    productsCart : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsCart.setOpenCart:
            return{
                ...state,
                isOpenCart: action.payload
            }
        case actionsCart.setCartProduct:
            return{
                ...state,
                productsCart: action.payload
            }
        default:
            return state;
    }
}
export default cartReducer;