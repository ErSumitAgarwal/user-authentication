import axios from 'axios'
import swal from 'sweetalert'

export const startUserLogin = (formData, redirect) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response) => {
                const result = response.data
                console.log(result)
                if (result.hasOwnProperty('errors')) {
                    swal(result.errors)
                    dispatch(serverErrors(result))
                } else {
                    swal(`Logged In Successfully! `)
                    localStorage.setItem('token', result.token)
                    // console.log(result)
                    dispatch(isLoggedIn(true))
                    redirect()
                }
            })
            .catch((error) => {
                swal(error.message)
            })
    }
}

export const startUserRegistration = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
            .then((response) => {
                const result = response.data
                // console.log(result)
                if (result.hasOwnProperty('errors')) {
                    swal(result.message)
                } else {
                    swal('Registered Successfully!')
                    dispatch(addUser(result))
                }
            })
            .catch((error) => {
                swal(error.message)
            })
    }
}

export const startGetUserDetails = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    swal(result)
                } else {
                    dispatch(getUser(result))
                    // console.log(result)
                }
            })
            .catch((error) => {
                swal(error.message)
            })
    }
}

export const isLoggedIn = (data) => {
    return {
        type: 'IS_LOGGED_IN',
        payload: data
    }
}

export const addUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const serverErrors = (errors) => {
    return {
        type: 'SERVER_ERRORS',
        payload: errors
    }
}

export const getUser = (data) => {
    return {
        type: 'GET_USER',
        payload: data
    }
}

