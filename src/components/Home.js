import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


export const Home = () => {
    const context = useContext(noteContext)
    const { notes, setNotes } = context;
    return (
        <div>
            <div className="container my-3">
                <h2>Add Notes</h2>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-dark">Add Note</button>
                </form>
            </div>
            <div className="container my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return note.title
                })}
            </div>
        </div>
    )
}