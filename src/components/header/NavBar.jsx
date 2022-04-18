import CartModal from "./CartModal";
import LoginModal from "../login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { setOpenLoginThunk, messageWarningAuthThunk } from "../../redux/actions/actionsLogin";
import { getCartThunk, setOpenCartThunk } from "../../redux/actions/actionsCart";
import {getAllPurchasesThunk, setOpenPurchasesThunk, addPurchasesThunk} from "../../redux/actions/actionsPurchases";
import { useNavigate } from "react-router-dom";
import Overlay from "./Overlay";

const NavBar = () => {

    const {isOpenLogin, isOpenCart,productsCart, isOpenPurchases} = useSelector(state => ({
        isOpenLogin: state.login.isOpenLogin,
        isOpenCart: state.cart.isOpenCart,
        productsCart: state.cart.productsCart,
        isOpenPurchases: state.purchases.isOpenPurchases,
    }))

    const navigate  = useNavigate();
    const dispatch = useDispatch();

    const showLogin = () =>{
        dispatch(setOpenLoginThunk(!isOpenLogin));
        dispatch(messageWarningAuthThunk(""));
    }

    const openPurchases = () =>{
        if(localStorage.getItem("token")){
            dispatch(setOpenPurchasesThunk(true));
            dispatch(getAllPurchasesThunk());
            navigate("/purchases");
        }else{
            dispatch(setOpenLoginThunk(true));
            dispatch(messageWarningAuthThunk("You have to Log In to access to your purchases"));
        }
    }

    const openCart = ()=>{
        if(localStorage.getItem("token")){
            dispatch(getCartThunk());
            dispatch(messageWarningAuthThunk(""));
        }else{
            dispatch(messageWarningAuthThunk("You have to Log In to access to your cart"));
            dispatch(setOpenLoginThunk(!isOpenLogin));
        }
    }

    const closeModals = () =>{
        if(isOpenCart || isOpenLogin ){
            dispatch(setOpenLoginThunk(false));
            dispatch(setOpenCartThunk(false));
        }
    }

    const addPurchases = () => {
        dispatch(addPurchasesThunk());
        openPurchases();
        dispatch(setOpenCartThunk(false));
    }

    return(
        <header className="h-14 ">
            <div className="left-0 fixed right-0 top-0 z-50">
                <nav className="lg:border-b   xs:flex justify-between bg-white">
                    <div className="block xs:flex-1 px-5 py-3 text-2xl text-red-400 text-center xs:text-left">
                        <strong className="cursor-pointer m-0 p-0" onClick={()=> navigate("/")}>e-commerce</strong>    
                    </div>
                    
                    <button className="lg:border-l p-3.5 w-2/6 xs:w-1/6" onClick={showLogin}>
                        <i className={`bi bi-person ${isOpenLogin?'text-red-500':'text-gray-500'} m-auto w-4 h-4`}></i>
                    </button>
                    <button className="lg:border-l p-3.5 w-2/6 xs:w-1/6" onClick={openPurchases}>
                        <i className={`bi bi-shop ${isOpenPurchases?'text-red-500':'text-gray-500'} m-auto`}></i>
                    </button>
                    <button className="lg:border-l p-3.5 w-2/6 xs:w-1/6" onClick={openCart}>
                        <i className={`bi bi-cart ${isOpenCart?'text-red-500':'text-gray-500'} m-auto`}></i>
                    </button>
                </nav>
                <CartModal isShow={isOpenCart} productsCart={productsCart} addPurchases={addPurchases}/>
                <LoginModal isShow={isOpenLogin}/>
                { (isOpenCart || isOpenLogin) && <Overlay close={closeModals}/> } 
            </div>
        </header>
    )
}
export default NavBar;