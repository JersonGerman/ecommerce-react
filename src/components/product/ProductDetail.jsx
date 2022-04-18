import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOpenCartThunk,addToCartThunk } from "../../redux/actions/actionsCart";
import { setOpenLoginThunk, messageWarningAuthThunk } from "../../redux/actions/actionsLogin";

const ProductDetail = ({product}) => {
    
    const [ quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addToCart = ()=>{
        if(localStorage.getItem("token")){
            dispatch(addToCartThunk(product.id, quantity))
            dispatch(setOpenCartThunk(true));
        }else{
            dispatch(setOpenLoginThunk(true));
            dispatch(messageWarningAuthThunk("You have to log in to add products to your cart"))
        }
    }
   
    return(
        <div className="">
            <div className=""></div>
            <h2 className="mb-5 ml-2 font-bold text-xl text-gray-500 ">{product.title}</h2>
            <div className="flex flex-col-reverse">
                <div className="">
                    <div className="flex mb-5">
                        <div className="w-2/4">
                            <span className='block text-gray-400 mb-1'>Price</span>
                            <span className="text-base font-semibold text-gray-800 ml-2.5 block">
                                $ {product.price}
                            </span>
                        </div>
                        <div className="">
                            <div className="text-gray-400 mb-1">Quantity</div>
                            <div className="flex mb-5">
                                <button className="hover:border-2 border h-7 w-7 leading-5 text-lg" onClick={() => setQuantity(quantity+1)}>
                                    <i className="bi bi-plus"></i>
                                </button>
                                <div className="leading-6 px-5 border">
                                    {quantity}
                                </div>
                                <button className="hover:border-2 border h-7 w-7 leading-5 text-lg" onClick={() => setQuantity(quantity-1)} disabled={quantity <= 1}>
                                    <i className="bi bi-dash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white text-lg mb-12 w-full p-3 font-semibold" onClick={addToCart}>
                        Add to cart <i className='bi bi-bag-plus ml-1.5 text-xl'></i>
                    </button>
                </div>
                <p className='mb-7 leading-5 text-gray-600'>
                {product.description}
                </p>
            </div>
        </div>
    )
}
export default ProductDetail;