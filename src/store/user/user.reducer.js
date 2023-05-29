import { USER_ACTION_TYPE } from "./user.type";
// export const USER_ACTION_TYPE = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// } 

const INITIAL_VALUE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
}
