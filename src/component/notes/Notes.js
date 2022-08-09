import React from 'react'
import { useSelector } from 'react-redux'
import AddNotes from './AddNotes'
import NotesList from './NotesList'

const Notes = (props) => {
    const notesList = useSelector((state) => {
        return state.notes
    })

    return (
        <div className='row'>
            <AddNotes />
            {notesList.length === 0 ? (
                <>
                    <h3 className='col-sm-8 col-md-8'> No notes found. Add your first note. </h3>
                </>
            ) : (
                <NotesList />
            )}
        </div>

    )
}

export default Notes
