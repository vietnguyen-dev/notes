import React, {useState} from 'react'
import styled from 'styled-components'

const NoteForm = styled.form`
    display: grid;
    grid-template-columns: 95% 5%;
`

const Pad = styled.textarea`
    height: 100vh;
    padding: 5%;
    background-color: #1E1E1E;
    color: white;
`

const Notepad = (props) => {
    const [note, setNote] = useState(props.note)

    const noteSubmit = (e) =>{
        e.preventDefault()

        if (note){
            let newNote = {
                id: 1,
                title: note.slice(0, 50),
                text: note
            }
    
            props.addNote(newNote)
        } 
    }

    return (
            <NoteForm onSubmit={noteSubmit}>
                <Pad value={note.text} onChange={(e) => setNote(e.target.value)}/>
                <button type='submit'>Save</button>
            </NoteForm>
    )
}

export default Notepad
