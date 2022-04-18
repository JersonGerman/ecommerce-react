import { actionsLoading } from "../actions/actionsLoading"

const INITIAL_STATE = {
    isLoading : false,
}

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsLoading.loading:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }

}

export default loadingReducer;