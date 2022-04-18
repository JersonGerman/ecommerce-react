import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesThunk, filterProductsByCategoryThunk,getAllProductsThunk } from "../../redux/actions/actionsProduct";

const Aside = () => {

    const [isShowPrice, setIsShowPrice] = useState(true);
    const [isShowCategory, setIsShowCategory] = useState(true);

    const dispatch = useDispatch();
    const {categoriesList} = useSelector(state => ({
        categoriesList: state.products.categoriesList,
    }))

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch]);

    const handleDropDownPrice = () =>{
        setIsShowPrice(!isShowPrice);
    }
    const handleDropDownCategory = () =>{
        setIsShowCategory(!isShowCategory);
    }
    const filterProductsByCategory = (id) => {
        dispatch(filterProductsByCategoryThunk(id))
    }


    return(

        <aside className="block pt-10 pb-5 px-4 w-56">
            <div className="fixed">
                <div className="w-48">
                    {/* DropDown */}
                    <div className={`mb-0 ${isShowPrice?'max-h-72':'max-h-10'} overflow-hidden transition-all duration-1000`}>
                        <div className="border-b-2 cursor-pointer flex h-9 items-center justify-between font-bold p-px text-xs text-gray-600" onClick={handleDropDownPrice}>
                            <span>Price</span>
                            <i className={`bi bi-chevron-down ${isShowPrice?'':'rotate-180'} transition-all duration-700 `}></i>
                        </div>
                        <div className="flex-1 py-3">
                            <form className="block">
                                <label className="flex items-center mb-3 pl-2">
                                    <span className="w-1/5 text-xs text-gray-600">From</span>
                                    <input className="block border-2  text-xs outline-none py-1 px-2.5 w-4/5 " type="number" />
                                </label>
                                <label className="flex items-center mb-3 pl-2">
                                    <span className="w-1/5 text-xs text-gray-600">To</span>
                                    <input className="block border-2  text-xs outline-none py-1 px-2.5 w-4/5 " type="number"/>
                                </label>
                                <button className="block text-white bg-red-500 mt-6 mb-5 ml-auto p-2 px-3.5 rounded text-xs">Filter price</button>
                            </form>
                        </div>
                    </div>
                    {/* Dropdrow */}
                    <div className={`mb-0 ${isShowCategory?'max-h-72':'max-h-10'} overflow-hidden transition-all duration-1000`}>
                        <div className="border-b-2 cursor-pointer flex h-9 items-center justify-between font-bold p-px text-xs text-gray-600" onClick={handleDropDownCategory}>
                            <span>Category</span>
                            <i className={`bi bi-chevron-down ${isShowCategory?'':'rotate-180'} transition-all duration-700`}></i>
                        </div>
                        <div className="flex-1 py-3">
                            <ul className="">
                                <li className="mb-0 ml-5">
                                    <button className="bg-none border-0 text-xs" onClick={() => dispatch(getAllProductsThunk())}>All</button>
                                </li>
                                {
                                    categoriesList.map(category =>(
                                        <li className="mb-0 ml-5" key={category.id}>
                                            <button className="bg-none border-0 text-xs" onClick={() => filterProductsByCategory(category.id)}>{category.name}</button>
                                        </li>
                                    ))
                                }
                                
                                {/* <li className="mb-0 ml-5">
                                    <button className="bg-none border-0 text-xs">Computers</button>
                                </li>
                                <li className="mb-0 ml-5">
                                    <button className="bg-none border-0 text-xs">Smartphones</button>
                                </li>
                                <li className="mb-0 ml-5">
                                    <button className="bg-none border-0 text-xs">Kitchen</button>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default Aside;