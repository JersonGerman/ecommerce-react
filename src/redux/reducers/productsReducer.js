import { actionsProduct } from "../actions/actionsProduct";

const INITIAL_STATE = {
    productsList : [],
    categoriesList: [],
    productDetail: {}
}

const productsReducer = (state = INITIAL_STATE, action) => {    
	switch(action.type){

        case actionsProduct.getAllProducts:
            return {
                ...state,
                productsList: action.payload
            };
        case actionsProduct.getAllCategories:
            return {
                ...state,
                categoriesList: action.payload
            }
        case actionsProduct.getProductDetail:
            return{
                ...state,
                productDetail: action.payload
            }
        
        default:
            return state;
    }
}

export default productsReducer;