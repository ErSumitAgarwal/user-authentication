import React from 'react'
import { useSelector } from 'react-redux'
import NotesItem from './NotesItem'

const NotesList = (props) => {
    const notes = useSelector((state) => {
        return state.notes
    })
    // console.log(notes)

    return (
        <div className='col-sm-8 col-md-8'>
            <h2> Notes - {notes.length} </h2> <hr />
            {notes.map(note => {
                return <NotesItem key={note.id} {...note} />
            })}
        </div>
    )
}

export default NotesList
