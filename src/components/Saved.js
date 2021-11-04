import React from 'react'
import SavedNote from './SavedNote'
import styled from 'styled-components'

const SavedContainer = styled.div`
  background-color: #160804;
  opacity: 0.9;
  color: white;
  padding: 0% 5% 0% 5%;

  width: 90%;
  height: 97vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Saved = ({saved, currentNote, showNote}) => {
    
    let savedWithCurrent = saved.map(note => {
        if (note.id === currentNote.id){
            note.current= true
            return note
        } else{
            note.current = false
             return note;
        }
    })

    const SaveNotes = () => {
        return (
            <>
             {savedWithCurrent.map(note => 
                <SavedNote  
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    currentDate={note.currentdate}
                    showNote={showNote}
                    current={note.current}
                />    
            )}
            </>
        )
    }

    return (
        <SavedContainer>
            {saved.length > 0 ? <SaveNotes/> : <p>No Current Notes</p>}
        </SavedContainer>
    )
}

export default Saved
