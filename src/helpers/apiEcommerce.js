import axios from "axios";

const BASE_URL = 'https://ecommerce-api-react.herokuapp.com/api/v1';

const http = axios.create({baseURL: BASE_URL});

http.interceptors.request.use(
    
    (request) =>{
        if(localStorage.getItem("token") !== ''){
        
            request.headers["Authorization"] =`Bearer ${localStorage.getItem("token")}`;
        }
        return request;
    }
)

export default http;