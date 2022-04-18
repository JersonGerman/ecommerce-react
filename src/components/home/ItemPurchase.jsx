const ItemPurchase = ({purchase}) =>{

    const {cart,createdAt} = purchase;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(createdAt).toLocaleDateString('en-us', options);

    return(
        <div className="border-2 rounded-lg mb-5 overflow-hidden">
            <div className="py-5 px-7 border-b text-gray-600">
                <b>{date}</b>
            </div>
            <ul className="pt-5 pb-2.5 px-2.5">
                {
                    cart.products.map(({id,title,price,productsInCart}) => (
                        <li className="mb-5 flex items-center h-14" key={id}>
                            <div className="h-full px-2.5 w-1/12"></div>
                            <div className="text-sm w-2/5 text-gray-500 font-semibold">
                                {title}
                            </div>
                            <div className="w-1/4 px-2.5">
                                <div className="p-2.5 border m-auto w-16 text-center">
                                    {productsInCart.quantity}
                                </div>
                            </div>
                            <div className="font-semibold text-center w-1/6">
                                $ {price}
                            </div>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}
export default ItemPurchase;