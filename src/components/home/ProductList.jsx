import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsThunk} from "../../redux/actions/actionsProduct";
import { setOpenPurchasesThunk } from "../../redux/actions/actionsPurchases";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";   

const ProductList = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.products.productsList)

    useEffect(()=>{
        dispatch(getAllProductsThunk());
        dispatch(setOpenPurchasesThunk(false));
    },[dispatch]);


    return(
        <section className="block flex-1 m-auto max-w-none pt-10 p-9">
            <SearchBox />
            {/* Product List */}
            <ul className="flex flex-wrap list-none">
                {
                    productList.map(product => (
                        <li className="w-1/3 p-6" key={product.id}>
                            {/* card */}
                            <ProductCard product={product} />
                        </li>
                    ))
                }
                
            </ul>
        </section>
    )
}
export default ProductList;