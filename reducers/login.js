import {LOGIN_FAILURE, LOGIN_PROGERSS, LOGIN_SUCCESS} from '../constants';

const initialState = {
    login: [],
    isLoggingIn: false,
    error: false
}

export default function loginReducer(state = initialState, action) {
    console.log("login reducer called" + action.type);
    switch(action.type) {
        case LOGIN_PROGERSS:
            return {
                ...state,  //creates a copy of the state object and only changes the values that needto be changed
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