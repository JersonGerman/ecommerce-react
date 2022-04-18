import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Loading from "./components/Loading";
import HomePage from "./pages/HomePage";
import PurchasesPage from "./pages/PurchasesPage";
import ProductPage from "./pages/ProductPage";
import PrivateRoute from "./router/PrivateRoute";

const App = () => {    
    const loading = useSelector(state => state.loading.isLoading)
    
    return(

        <HashRouter>

            { loading && <Loading />}

            <Header />
            <div className="block flex-1">
                <Routes>

                    <Route path="/" element={<HomePage />}/>
                    <Route path="/shop/:id" element={<ProductPage />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/purchases" element={<PurchasesPage />} />
                    </Route>

                </Routes>
                
            </div>
        </HashRouter>
        
    )
}

export default App;