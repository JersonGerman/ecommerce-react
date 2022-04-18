import { useEffect, useState } from "react";

const CartModal = ({isShow,productsCart,addPurchases}) => {

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(()=>{
        const total = productsCart.map(({price,productsInCart})=> price * productsInCart.quantity)
        setTotalAmount(total.reduce((a,b) => a+b,0))
    },[productsCart])

    return(
        <div className={`bg-white border-t bottom-0 fixed shadow-xl top-14  transition-all duration-300 ${isShow?'right-0':'-right-80'} w-64 z-10`}>
            <div className="flex flex-col h-full py-5">
                <div id="cart-modal" className="flex-1 overflow-auto">
                    <h4 className="text-sm font-semibold text-gray-900 mb-5 px-5">Carrito de compras</h4>
                    {/* Items list cart */}
                    <ul className="flex-1 mb-5 px-5">
                        {
                            productsCart.map(product => (
                                <li className="mb-12" key={product.id}>
                                    <div className="flex mb-3">
                                        <div className="flex-1 px-2.5">
                                            <span className="text-gray-400 text-xs mb-0.5 block">{product.brand}</span>
                                            <a className="block text-xs font-medium text-gray-600 mb-2 leading-4 " href="#/product/10">{product.title}</a>
                                            <div className="border  rounded-sm h-6 text-center w-10">
                                                {product.productsInCart.quantity}
                                            </div>
                                        </div>
                                        <div className="button-delete">
                                            <button className="bg-transparent text-red-600 text-xs">
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="label text-xs text-gray-400 mr-2.5">Total: </span>
                                        <b className="text-xs text-gray-700">$ {product.price}</b>
                                    </div>
                                  
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Total checkout */}
                <div className="border-t-2 py-3 px-5">
                    <div className="flex justify-between mb-5">
                        <span className="text-gray-400 text-xs">Total:</span>
                        <b className="text-gray-700 text-base">$ {totalAmount}</b>
                    </div>
                    <button className="bg-red-500 text-white p-2 w-full text-xs" onClick={addPurchases}>Checkout</button>
                </div>
            </div>
        </div>
    )
}
export default CartModal;