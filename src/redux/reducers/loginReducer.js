import { actionsLogin } from "../actions/actionsLogin";

const INITIAL_STATE = {
    isOpenLogin : false,
    messageWarningAuth: ""
}

const loginReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case actionsLogin.setOpenLogin:
            return {
                ...state,
                isOpenLogin: action.payload
            }
        case actionsLogin.messageWarningAuth:
            return{
                ...state,
                messageWarningAuth: action.payload
            }
        default:
            return state;
    }
}
export default loginReducer;