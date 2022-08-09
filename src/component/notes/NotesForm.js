import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const NotesForm = (props) => {
    const { id: slNo, title: noteTitle, note: noteBody, submitNote } = props
    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [title, setTitle] = useState(noteTitle ? noteTitle : '')
    const [note, setNote] = useState(noteBody ? noteBody : '')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}


    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else if (e.target.name === 'note') {
            setNote(e.target.value)
        }
    }

    const runValidation = () => {
        if (title.trim().length === 0) {
            errors.title = 'Title cannot be empty'
        }
        if (note.trim().length === 0) {
            errors.note = 'Note cannot be empty'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()

        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                id: id,
                title: title,
                note: note
            }
            submitNote(formData)
            // console.log(formData)
            setId(uuidv4())
            setTitle('')
            setNote('')
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className='d-grid gap-2 col-5 mx-5 mb-3' >
                    <input type='text' name='title' value={title} placeholder='Enter note title' className="form-control" onChange={handleChange} />
                    {formErrors.title && <span> {formErrors.title} </span>}
                </div>
                <div className='d-grid gap-2 col-5 mx-5 mb-3 '>
                    <textarea name='note' value={note} placeholder='Enter note' className="form-control" onChange={handleChange}></textarea>
                    {formErrors.note && <span> {formErrors.note} </span>}
                </div>
                <div className='d-grid gap-2 col-5 mx-5 mb-2'>
                    <button className='btn btn-primary'> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default NotesForm
