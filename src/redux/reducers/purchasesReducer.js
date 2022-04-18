import { actionsPurchases } from "../actions/actionsPurchases";

const INITIAL_STATE = {
    isOpenPurchases : false,
    purchasesList: []
}

const purchasesReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case actionsPurchases.isOpenPurchases:
            return {
                ...state,
                isOpenPurchases: action.payload
            }
        case actionsPurchases.setPurchases:
            return{
                ...state,
                purchasesList: action.payload
            }

        default:
            return state;
    }
}
export default purchasesReducer;