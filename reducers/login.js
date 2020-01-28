import {LOGIN_FAILURE, LOGIN_PROGERSS, LOGIN_SUCCESS} from '../constants';

const initialState = {
    login: [],
    isLoggingIn: false,
    error: false
}

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_PROGERSS:
            return {
                ...state,
                isLoggingIn: true,
                login: []
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                login: action.data
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: true
            }
        default:
            return state
    }
}