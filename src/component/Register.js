import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startUserRegistration } from '../action/userActions'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const runValidation = () => {
        if (username.trim().length === 0) {
            errors.username = 'Name is required'
        }
        if (email.trim().length === 0) {
            errors.email = 'Email cannot be empty'
        }
        if (password.trim().length === 0) {
            errors.password = 'Password cannot be empty'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                // id: Number(new Date()),
                username: username,
                email: email,
                password: password
            }
            dispatch(startUserRegistration(formData))
            console.log(formData)
            setUsername('')
            setEmail('')
            setPassword('')
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <h2 className='mb-4' align='center'> Register with us! </h2>
            <form onSubmit={handleSubmit}>
                <div className='d-grid gap-2 col-3 mx-auto'>
                    <input type='text' name='username' value={username} placeholder='Enter full name' className="form-control-lg" onChange={handleChange} />
                    {formErrors.username && <span> {formErrors.username} </span>}<br />
                </div>
                <div className='d-grid gap-2 col-3 mx-auto'>
                    <input type='email' name='email' value={email} placeholder='Enter email' className="form-control-lg" onChange={handleChange} />
                    {formErrors.email && <span> {formErrors.email} </span>}<br />
                </div>
                <div className='d-grid gap-2 col-3 mx-auto'>
                    <input type='password' name='password' value={password} placeholder='Enter password' className="form-control-lg" onChange={handleChange} />
                    {formErrors.password && <span> {formErrors.password} </span>}<br />
                </div>
                <div className='d-grid gap-2 col-3 mx-auto'>
                    <button className='btn btn-primary'> Register </button>
                </div>

            </form>
        </div>
    )
}

export default Register
