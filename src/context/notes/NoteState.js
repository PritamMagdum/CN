import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const initialNotes = []

    const [notes, setNotes] = useState(initialNotes)
    // Get all Notes function
    const getNotes = async () => {

        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzM1MjdlZjA4ZmIyYTg1MDhmNWNiNiIsImlhdCI6MTcwNzMyMDE5MX0.IyJ_-SvdehJoTTHh8R99PDaPwoeWyuYizbO_LsIQVMk"

            }
        });
        const json = await response.json()
        setNotes(json);
    }


    // Add Notes function
    const addNote = async (title, description, tag) => {

        // API Call
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzM1MjdlZjA4ZmIyYTg1MDhmNWNiNiIsImlhdCI6MTcwNzMyMDE5MX0.IyJ_-SvdehJoTTHh8R99PDaPwoeWyuYizbO_LsIQVMk"

            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        // console.log(json);

        // console.log("Adding a new note");
        // const note = {
        //     "_id": "65c4dbe76b2e1dfdfdf2cb39c81f42",
        //     "user": "65c3527ef08fb2a8508f5cb6",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": "2024-02-08T13:49:27.776Z",
        //     "__v": 0
        // }
        setNotes(notes.concat(note))
    }

    // Delete Notes function
    const deleteNote = async (id) => {
        // TODO : API Call
        // API Call
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzM1MjdlZjA4ZmIyYTg1MDhmNWNiNiIsImlhdCI6MTcwNzMyMDE5MX0.IyJ_-SvdehJoTTHh8R99PDaPwoeWyuYizbO_LsIQVMk"

            },
        });
        const json = response.json()
        // console.log(json);

        // console.log("deleting note with id : " + id);
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
    }

    // Update Notes function
    const updateNotes = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzM1MjdlZjA4ZmIyYTg1MDhmNWNiNiIsImlhdCI6MTcwNzMyMDE5MX0.IyJ_-SvdehJoTTHh8R99PDaPwoeWyuYizbO_LsIQVMk"

            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();
        // console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))

        // Logic to update notes
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, updateNotes, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;