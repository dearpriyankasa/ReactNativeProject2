import { LOGIN_PROGERSS, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

//For login
export function makeLoginCall(body) {
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
    return {
        type: LOGIN_PROGERSS
    }
}

function loginSuccess(data) {
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


// //For SignUp
// export function makeSignUpCall(body) {
//     return(dispatch) => {
//         dispatch(signup())
//         fetch('http://192.168.0.176:5900/api/v2/auth/signup', {
//                 method: 'POST',
//                 body: JSON.stringify(body)
//             })
//             .then(res => {return res.json()})
//             .then(json => {
//                 dispatch(signupSuccess(json)) 
//             })
//             .catch(err => dispatch(signupFailure(err)))
//     }
// }

// function signup() {
//     return {
//         type: SIGNUP_PROGERSS
//     }
// }

// function signupSuccess(data) {
//     return {
//         type: SIGNUP_SUCCESS,
//         data
//     }
// }

// function signupFailure(err) {
//     return {
//         type: SIGNUP_FAILURE
//     }







