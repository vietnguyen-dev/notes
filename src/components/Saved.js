import React from 'react'
import SavedNote from './SavedNote'
import styled from 'styled-components'

const SavedContainer = styled.div`
  background-color: #160804;
  opacity: 0.9;
  color: white;
  padding: 0% 10% 0% 10%;
`;

const Saved = ({saved, currentNote, showNote, deleteNote}) => {
    
    let savedWithCurrent = saved.map(note => {
        if (note.id === currentNote.id){
            note.current= true
            return note
        } else{
            note.current = false
             return note;
        }
    })

    return (
        <SavedContainer>
            {savedWithCurrent.map(note => 
                <SavedNote  
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    showNote={showNote}
                    deleteNote={deleteNote}
                    current={note.current}
                />    
            )}
        </SavedContainer>
    )
}

export default Saved
