import React, { useState } from 'react'
import { removeNote } from '../../action/noteActions'
import { useDispatch } from 'react-redux'
import NotesForm from './NotesForm'
import { updateNote } from '../../action/noteActions'

const NotesItem = (props) => {
    const [toggle, setToggle] = useState(false)
    const { id, title, note } = props

    const dispatch = useDispatch()

    const submitNote = (note) => {
        dispatch(updateNote(note))
        setToggle(!toggle)
    }

    return (
        <div>
            {toggle ? (
                <>
                    <NotesForm id={id} title={title} note={note} submitNote={submitNote} />
                    <div className='d-grid gap-2 col-5 mx-5 mb-4'>
                        <button className='btn btn-primary' onClick={() => { setToggle(!toggle) }}> Cancel </button>
                    </div>

                </>
            ) : (
                <div>
                    <table className='table'>
                        <thead className='table table-dark'>
                            <tr>
                                <th> Title </th>
                                <th> Note </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {title} </td>
                                <td> {note} </td>
                                <td></td>
                            </tr>
                        </tbody>
                        <button className='btn btn-outline-secondary' onClick={() => { setToggle(!toggle) }}> Edit </button>
                        <button className='btn btn-outline-danger' onClick={() => { dispatch(removeNote(id)) }}> Remove </button>
                    </table>

                </div>
            )}
        </div>
    )
}

export default NotesItem