import { LOGIN_PROGERSS, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

//For login
export function makeLoginCall(body) {
    console.log("Login action performed");
    return(dispatch) => {
        dispatch(login())
        fetch('http://192.168.0.176:5900/api/v2/auth/login', {
                method: 'POST',
                body: JSON.stringify(body)
            })
            .then(res => {return res.json()})
            .then(json => {
                dispatch(loginSuccess(json)) 
            })
            .catch(err => dispatch(loginFailure(err)))
    }
}

function login() {
    //returns an action
    return {
        type: LOGIN_PROGERSS
    }
}

function loginSuccess(data) {
    console.log("inside login success ; data is --------------->", data);
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE
    }
}
