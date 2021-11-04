import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const NoteForm = styled.form`
    display: grid;
    grid-template-columns: 95% 5%;
`

const Pad = styled.textarea`
    height: 90vh;
    padding: 1% 5% 0% 5%;
    line-height: 2;
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

const CurrentDate = styled.p`
  color: #d3d3d3;
  text-align: center;
  background-color: #1e1e1e;
  padding: 1%;
`;

const Notepad = ({note, action, addNote, replaceNote}) => {
    const [currentNote, setNote] = useState(note)

    useEffect(() =>{
        setNote(note)
    }, [note])

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
                 let replacing = {
                    id: note.id,
                    title: currentNote.slice(0, 50),
                    text: currentNote,
                    currentdate: new Date().toDateString(),
                 };
                replaceNote(replacing);
                break;
            default:
                console.error(`invalid action type: ${action}`)
        } 
    }

    return (
      <div>
        <CurrentDate>{note.currentdate}</CurrentDate>
        <NoteForm onSubmit={noteSubmit}>
          <Pad value={currentNote.text} onChange={settingNote} />
          <Save type="submit">SAVE</Save>
        </NoteForm>
      </div>
    );
}

export default Notepad
