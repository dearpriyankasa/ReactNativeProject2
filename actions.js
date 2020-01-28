import { LOGIN_PROGERSS, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export function makeLoginCall() {
    return(dispatch) => {
        dispatch(login())
        fetch('http://192.168.0.176:3000/login')
            .then(res => {console.log("response is", res);
            return res.json()
        })
            .then(json => {
                dispatch(loginSuccess(json.message)) 
            })
            .catch(err => dispatch(loginFailure(err)))
    }
}

function login() {
    console.log("inside login")
    return {
        type: LOGIN_PROGERSS
    }
}

function loginSuccess(data) {
    console.log("inside login success")
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

function loginFailure(err) {
    console.log("inside login failure", err)
    return {
        type: LOGIN_FAILURE
    }
}