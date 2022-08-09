import React from 'react'
import NotesForm from './NotesForm'
import { useDispatch } from 'react-redux'
import { addNotes } from '../../action/noteActions'

const AddNotes = (props) => {
    const dispatch = useDispatch()

    const submitNote = (data) => {
        dispatch(addNotes(data))
    }
    return (
        <div className='col-sm-4 col-md-4'>
            <h2 className='mx-5 mb-3'> Add Note </h2>
            <NotesForm submitNote={submitNote} />
        </div>
    )
}

export default AddNotes
