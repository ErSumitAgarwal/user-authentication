const setInitialState = {
    user: {},
    serverErrors: {},
    loginStatus: false,
    loading: false
}

const userReducer = (state = setInitialState, action) => {
    switch (action.type) {
        case 'GET_USER': {
            return { ...state, user: { ...action.payload } }
        }
        case 'SET_USER': {
            return { ...state, user: { ...action.payload } }
        }
        case 'IS_LOGGED_IN': {
            return { ...state, loginStatus: action.payload }
        }
        case 'SERVER_ERRORS': {
            return { ...state, serverErrors: { ...action.payload } }
        }
        default: {
            return { ...state }
        }
    }
}

export default userReducer 