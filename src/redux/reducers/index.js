import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loadingReducer from "./loadingReducer";
import loginReducer from "./loginReducer";
import productsReducer from "./productsReducer";
import purchasesReducer from "./purchasesReducer";

const rootReducer = combineReducers({
    loading: loadingReducer,
    products: productsReducer,
    login : loginReducer,
    cart : cartReducer,
    purchases: purchasesReducer
})

export default rootReducer;