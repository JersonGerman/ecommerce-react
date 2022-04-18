import ProductCard from "../home/ProductCard";

const Suggestions = ({products = []}) =>{

    return(
        <div className="mb-16">
            <strong className="text-red-500 block text-lg mb-5">Discover similar items</strong>
            <ul className="flex flex-wrap">
                {
                    products.map(product => (
                        <li key={product.id} className="w-1/3 p-6">
                            <ProductCard product={product}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Suggestions;