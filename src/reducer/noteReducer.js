const notesInitialState = []

const noteReducer = (state = notesInitialState, action) => {
    switch (action.type) {
        case 'ADD_NOTES': {
            return [action.payload, ...state]
        }
        case 'REMOVE_NOTE': {
            return state.filter(note => {
                return note.id !== action.payload
            })
        }
        case 'UPDATE_NOTE': {
            return state.map(note => {
                if (note.id === action.payload.id) {
                    return { ...note, ...action.payload }
                } else {
                    return { ...note }
                }
            })
        }
        default: {
            return [...state]
        }
    }
}

export default noteReducer