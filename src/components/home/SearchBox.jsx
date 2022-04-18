import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchProductThunk } from "../../redux/actions/actionsProduct";

const SearchBox = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit} = useForm()

    const submit = (data) =>{
        dispatch(searchProductThunk(data.search))
    }

    return(
        <div className="mx-6 relative">
            <form className="m-auto flex max-h-full" onSubmit={handleSubmit(submit)} >
                <input className="border flex-1 text-xs py-1 px-3 outline-0" type="text" placeholder="What are you looking for?" {...register("search",{required:false})} />
                <button className="bg-red-500 border-0 text-white text-sm h-9 w-20">
                    <i className="bi bi-search z-0"></i>
                </button>
                <div></div>
            </form>
        </div>
    )
}
export default SearchBox;