import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "65c4dbae6b2412cb39c81f0c",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "Secret Love Book",
            "description": "This is my secret notes",
            "tag": "Personal",
            "date": "2024-02-08T13:48:30.974Z",
            "__v": 0
        },
        {
            "_id": "65c4db276b2e12cb39c81f12",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12cb39c84f12",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12cb39581f12",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12cb39c81412",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12cb39c81712",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        },
        {
            "_id": "65c4dbe76b2e12cb39c81f42",
            "user": "65c3527ef08fb2a8508f5cb6",
            "title": "normal Book",
            "description": "This is my normal notes",
            "tag": "Public",
            "date": "2024-02-08T13:49:27.776Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;