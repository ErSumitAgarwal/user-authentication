import React, { useEffect } from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import Notes from './notes/Notes'
import { Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedIn } from '../action/userActions'
import swal from 'sweetalert'

const NavBar = (props) => {

    const dispatch = useDispatch()

    const loggedIn = useSelector((state) => {
        const result = state.userData
        return result.loginStatus
    })
    // console.log(isLoggedIn)

    const handleAuth = () => {
        dispatch(isLoggedIn(true))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handleAuth()
        }
    }, [])

    return (
        <div className='mx-5'>
            <Link to='/'> Home </Link> <b> | </b>
            {
                loggedIn ? (
                    <>
                        <Link to='/account'> Account </Link> <b> | </b>
                        <Link to='/notes'> Notes </Link> <b> | </b>
                        <Link to='/' onClick={() => {
                            dispatch(isLoggedIn(false))
                            localStorage.removeItem('token')
                            swal('Logged out successfully')
                        }}> Logout </Link>
                    </>
                ) : (
                    <>
                        <Link to='/login'> Login </Link> <b> | </b>
                        <Link to='/register'> Register </Link>
                    </>
                )
            } <hr />

            <Route path='/' component={Home} exact={true} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/account' component={Account} />
            <Route path='/notes' component={Notes} />
        </div>
    )
}

export default NavBar
