import { Link } from "react-router-dom";

const History = ({title}) =>{

  
    return(
        <div className="flex items-center mb-5 text-xs ">
            <Link to="/" className="text-gray-400 ">Home</Link>
            <div className="bg-red-500 rounded-t-full h-1.5 w-1.5 mx-3.5 "></div>
            <b className="text-gray-600">{title}</b>
        </div>
    )
}
export default History;