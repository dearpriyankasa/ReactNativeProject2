import {SIGNUP_FAILURE, SIGNUP_PROGERSS, SIGNUP_SUCCESS} from '../constants';

const initialState = {
    signUp: [],
    isSigningUp: false,
    error: false
}

export default function signUpReducer(state = initialState, action) {
    switch(action.type) {
        case SIGNUP_PROGERSS:
            return {
                ...state,
                isSigningUp: true,
                signUp: []
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                signUp: action.data
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                error: true
            }
        default:
            return state
    }
}