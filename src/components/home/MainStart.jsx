import Aside from "./Aside";
import ProductList from "./ProductList";

const MainStart = () => {

    return(
        <div className="flex-1">
            <div className="flex">

                <Aside />
                <ProductList />
            </div>

        </div>
    );
}
export default MainStart;