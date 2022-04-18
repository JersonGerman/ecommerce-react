import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    return(
        <div className="border h-full relative rounded-lg shadow-lg">
            <Link className="block no-underline" to={`/shop/${product.id}`}>
                <div className="items-center border-b flex h-56 justify-center relative">
                    <img alt="" className="object-contain bg-white block h-4/5 my-0 mx-auto  w-4/5 opacity-0 absolute transition-opacity duration-700 hover:opacity-100 " src={product.productImgs[1]} />
                    <img alt="" className="object-contain block h-4/5 my-0 mx-auto  w-4/5" src={product.productImgs[0]}/>
                </div>
                <div className="pt-4 pb-5 px-3">
                    <span className="block text-base"></span>
                    <strong className="block text-sm mb-5 ml-2 text-gray-500">{product.title}</strong>
                    <span className="block text-gray-400 ml-1 text-xs">Price</span>
                    <span className="block text-sm font-semibold ml-2.5 text-gray-500">$ {product.price}</span>
                </div>
            </Link>
            <button className="bg-red-500 rounded-full bottom-7 text-white text-lg h-9 w-9 absolute right-7 cursor-pointer border-0 ">
                <i className="bi bi-bag-plus"></i>
            </button>
        </div>
    )
}
export default ProductCard;