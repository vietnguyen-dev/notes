import React, { useState } from 'react'
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

const Save = styled.button`
    background-color: #1E1E1E;
    color: white;
    border-left: 1px solid grey;

    :hover{
        background-color: orange;
        color: black;
    }
`;

const Notepad = ({note, action, addNote, replaceNote}) => {
    const [currentNote, setNote] = useState('')

    const settingNote =(e) =>{
        setNote(e.target.value)
    }

    const noteSubmit = (e) =>{
        e.preventDefault()
     
        switch(action){
            case 'add':
                let newNote = {
                    title: currentNote.slice(0, 50),
                    text: currentNote,
                    currentdate: new Date().toDateString(),
                };
                addNote(newNote)
                break;
            case 'replace':
                console.log('hello')
                break;
            default:
                console.error(`invalid action type: ${action}`)
        } 
    }

    return (
      <NoteForm onSubmit={noteSubmit}>
        <Pad value={currentNote.text} onChange={settingNote} />
        <Save type="submit">SAVE</Save>
      </NoteForm>
    );
}

export default Notepad
