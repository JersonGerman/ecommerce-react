import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductInfo from "../components/product/ProductInfo";
import { getAllProductsThunk, getProductIdThunk} from "../redux/actions/actionsProduct";

const Product = () =>{
    
    const dispatch = useDispatch();
    const {id} = useParams();


    useEffect(()=>{
        dispatch(getProductIdThunk(id));
        dispatch(getAllProductsThunk());
    },[dispatch,id])

    return(
        <ProductInfo />
    )
}

export default Product;