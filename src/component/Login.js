import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startUserLogin } from '../action/userActions'
import validator from 'validator'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const runValidation = () => {
        if (email.trim().length === 0) {
            errors.email = 'Email cannot be empty'
        } else if (!validator.isEmail(email)) {
            errors.email = 'Invalid email format'
        }
        if (password.trim().length === 0) {
            errors.password = 'Password cannot be empty'
        }
    }

    const redirect = () => {
        return props.history.push('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                email: email,
                password: password
            }
            dispatch(startUserLogin(formData, redirect))
            // console.log(formData)
            setEmail('')
            setPassword('')
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <h2 className='mb-4' align='center'> Sign In </h2>
            <form onSubmit={handleSubmit}>
                <div className='d-grid gap-2 col-3 mx-auto'>
                    <input type='text' name='email' value={email} placeholder='Enter Email' className="form-control-lg" onChange={handleChange} />
                    {formErrors.email && <span> {formErrors.email} </span>} <br />
                </div>
                <div className='d-grid gap-2 col-3 mx-auto'>
                    <input type='password' name='password' placeholder='Enter password' className="form-control-lg" value={password} onChange={handleChange} />
                    {formErrors.password && <span> {formErrors.password} </span>} <br />
                </div>
                <div className='d-grid gap-2 col-3 mx-auto'>
                    <button className='btn btn-primary'> Login </button>
                </div>
            </form >
        </div >
    )
}

export default Login
