export const addNotes = (note) => {
    return {
        type: 'ADD_NOTES',
        payload: note
    }
}

export const removeNote = (id) => {
    return {
        type: 'REMOVE_NOTE',
        payload: id
    }
}

export const updateNote = (note) => {
    return {
        type: 'UPDATE_NOTE',
        payload: note
    }
}