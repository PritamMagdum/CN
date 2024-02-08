import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
function About() {

    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
        // eslint-disable-next-line 
    }, [])

    return (
        <div>This is {a.state.name} and surname is {a.state.surname}</div>
    )
}

export default About