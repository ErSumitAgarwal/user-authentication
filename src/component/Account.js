import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUserDetails } from '../action/userActions'

const Account = (props) => {
    const dispatch = useDispatch()

    const userDetails = useSelector((state) => {
        const result = state.userData
        return result.user
    })

    // console.log(userDetails)

    useEffect(() => {
        dispatch(startGetUserDetails())
    }, [])

    return (

        <div>
            <div className="card col-md-5" >
                <div className="card-header">
                    <h2> My Account </h2>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>User Name:</b> {userDetails.username} </li>
                    <li className="list-group-item"> <b>Email:</b> {userDetails.email} </li>
                    <li className="list-group-item"> <b>Account Creation Date:</b> {userDetails.createdAt} </li>
                </ul>
            </div>
        </div>
    )
}

export default Account
