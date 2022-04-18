import http from "../../helpers/apiEcommerce"
import { setIsLoading } from "./actionsLoading"

export const actionsProduct = {
    getAllProducts: 'GET_PRODUCTS',
    getAllCategories: "GET_CATEGORIES",
    getProductDetail: "GET_PRODUCT_ID"
}


const getAllProducts = (products) => ({
    type: actionsProduct.getAllProducts,
    payload: products
})
const getAllCategories = (categories) => ({
    type: actionsProduct.getAllCategories,
    payload: categories
})
const getProductDetail = (product) =>({
    type: actionsProduct.getProductDetail,
    payload: product
})

// Thunk functions
export const getAllProductsThunk = () =>{

    return dispatch => {
        dispatch(setIsLoading(true));
        http.get("/products/")
            .then(({data}) => dispatch( getAllProducts(data.data.products)) ) 
            .finally(() => dispatch(setIsLoading(false)))
    }
}
export const getAllCategoriesThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
        http.get("/products/categories/")
            .then(({data}) => dispatch(getAllCategories(data.data.categories)))
            .finally(()=> dispatch(setIsLoading(false)))
    }
}
export const filterProductsByCategoryThunk = (idCategory) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        http.get(`/products?category=${idCategory}`)
            .then(({data}) => dispatch(getAllProducts(data.data.products)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}
export const getProductIdThunk = (id) =>{
    return dispatch => {
        dispatch(setIsLoading(true))
        http.get(`/products/${id}`)
            .then(({data}) => dispatch(getProductDetail(data.data.product)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}
export const searchProductThunk = (name) => {
    return dispatch => {
        dispatch(setIsLoading(true))
        http.get(`/products?query=${name}`)
            .then(({data}) => dispatch(getAllProducts(data.data.products)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}