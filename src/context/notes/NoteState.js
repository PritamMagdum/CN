import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "65c4dbae6b241234534345cb39c81f0c",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "Secret Love Book",
            "description": "This is my secret notes",
            "tag": "Personal",
            "date": "2024-02-08T13:48:30.974Z",
            "__v": 0
        },
        {
            "_id": "65c4db276b2e1266546cb39c81f12",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12454cb39c84f12",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12cghb39581f12",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "rtrtrtrt45455656",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12dfdfscb39c81712",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12dfdcb39c81f4fgfgf2",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes)

    // Add Notes function
    const addNote = (title, description, tag) => {
        console.log("Adding a new note");
        const note = {
            "_id": "65c4dbe76b2e1dfdfdf2cb39c81f42",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // Update Notes function
    const updateNote = () => {

    }
    // Delete Notes function
    const deleteNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;