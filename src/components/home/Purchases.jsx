import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPurchasesThunk } from "../../redux/actions/actionsPurchases";
import History from "../product/History";
import ItemPurchase from "./ItemPurchase";

const Purchases = () =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllPurchasesThunk())
    },[dispatch])

    const purchasesList = useSelector(state => state.purchases.purchasesList)
    purchasesList.sort((a,b)=>b.id - a.id)
    console.log(purchasesList)
    return(
        <section className="max-w-4xl pt-10 px-5 pb-20 m-auto"  >
            <History title={"Purchases"} />
            <h1 className="mb-9 font-semibold text-xl text-gray-700">My purcharses</h1>
            {/*  */}
            
            {
                purchasesList.map((purchase) => (
                    <ItemPurchase purchase={purchase} key={purchase.id} />
                ))
            }
            
            {/*  */}
            {/* <div className="border rounded-lg mb-5 overflow-hidden">
                <div className="py-5 px-7 border-b text-gray-600">
                    <b>April 5, 2022</b>
                </div>
                <ul className="pt-7 pb-2.5 px-2.5">
                    <li className="mb-7 flex items-center h-14">
                        <div className="h-full px-2.5 w-1/12"></div>
                        <div className="text-sm w-2/5 text-gray-500 font-semibold">
                            Samsung Galaxy S22
                        </div>
                        <div className="w-1/4 px-2.5">
                            <div className="p-2.5 border m-auto w-16 text-center">
                                1
                            </div>
                        </div>
                        <div className="font-semibold text-center w-1/6">
                            $ 850.00
                        </div>
                    </li>
                </ul>
            </div> */}
        </section>
    )
}
export default Purchases;