import { USER_ACTION_TYPE } from "./user.type";
// export const USER_ACTION_TYPE = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// } 

const INITIAL_VALUE = {
    currentUser: null,
    isLoading: false,
    error: null,
}
/**
 *  CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
    GOOGGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILED: 'user/SIGN_IN_FAILED'
 */
export const userReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action;

    switch(type) {
        
        case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload, isLiading: false };
        
        case USER_ACTION_TYPE.SIGNOUT_SUCCESS:
            return { ...state, currentUser: null, isLiading: false };
        case USER_ACTION_TYPE.SIGN_IN_FAILED:
        case USER_ACTION_TYPE.SIGN_UP_FAILED:
        case USER_ACTION_TYPE.SIGNOUT_FAILED:
                return { ...state, error: payload, isLiading: false };
        
        default:
            return state;
    }
}
