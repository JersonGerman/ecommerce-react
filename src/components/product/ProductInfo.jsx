import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Gallery from "./Gallery";
import History from "./History";
import ProductDetail from "./ProductDetail";
import Suggestions from "./Suggestions";

const ProductInfo = () => {

    const [filterProducts, setFilterProducts] = useState([]);
    const {productsList,product} = useSelector(state => ({
        productsList: state.products.productsList,
        product: state.products.productDetail
    }))

    useEffect(()=>{
        const products = productsList.filter(({category}) => category.name === product.category)
        setFilterProducts(products);
    },[product.category,productsList])

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    }, [product]);


    return(
        <section className="max-w-7xl py-12 m-auto">
            {/* Location */}
            <History title={product.title}/>
            {/* Product */}
            <div className="flex ">
                <div className="p-12 w-2/4">
                    <Gallery images={product.productImgs} />
                </div>
                <div className="p-12 w-2/4">
                    <ProductDetail product={product}/>

                </div>
            </div>
            {/* Suggestions */}
            <Suggestions products={filterProducts} />
        </section>
    )
}
export default ProductInfo;