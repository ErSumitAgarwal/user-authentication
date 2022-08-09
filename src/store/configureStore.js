import { applyMiddleware } from 'redux'
import { createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducer/userReducer'
import noteReducer from '../reducer/noteReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        userData: userReducer,
        notes: noteReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore