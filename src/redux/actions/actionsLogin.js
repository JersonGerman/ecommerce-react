import http from "../../helpers/apiEcommerce"
import { setIsLoading } from "./actionsLoading"

export const actionsLogin = {
    setOpenLogin : "SET_OPEN_LOGIN",
    loginAuth : "LOGIN_AUTH",
    messageWarningAuth: "WARNING_AUTH"
}

// 
const setOpenLogin = (isOpen)=>({
    type: actionsLogin.setOpenLogin,
    payload: isOpen
})
const messageWarningAuth = (message) =>({
    type: actionsLogin.messageWarningAuth,
    payload: message   
})


// Thunk functions
export const setOpenLoginThunk = (isOpen) => {
    return dispatch =>{
        dispatch(setOpenLogin(isOpen));
    }
}
export const messageWarningAuthThunk = (message) =>{
    return dispatch => {
        dispatch(messageWarningAuth(message));
    }
}

export const loginThunk = (data) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return http.post("users/login/",data)
            .then(({data}) => {
                localStorage.setItem("token",data.data.token);
                localStorage.setItem("userName", data.data.user.firstName + " " + data.data.user.lastName);
            })
            .finally(() => dispatch(setIsLoading(false)))
    }
}

