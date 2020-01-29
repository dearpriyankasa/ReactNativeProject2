import { SIGNUP_PROGERSS, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants';

export function makeSignUpCall(body) {
    return(dispatch) => {
        dispatch(signup())
        fetch('http://192.168.0.176:5900/api/v2/auth/signup', {
                method: 'POST',
                body: JSON.stringify(body)
            })
            .then(res => {return res.json()})
            .then(json => {
                dispatch(signupSuccess(json)) 
            })
            .catch(err => dispatch(signupFailure(err)))
    }
}

function signup() {
    return {
        type: SIGNUP_PROGERSS
    }
}

function signupSuccess(data) {
    return {
        type: SIGNUP_SUCCESS,
        data
    }
}

function signupFailure(err) {
    return {
        type: SIGNUP_FAILURE
    }
}