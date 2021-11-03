import React from 'react'
import SavedNote from './SavedNote'
import styled from 'styled-components'

const SavedContainer = styled.div`
    background-color: #342820;
    opacity: .9;
    color: white;
    padding: 2% 3%;
`

const Saved = ({saved, showNote, deleteNote}) => {
    return (
        <SavedContainer>
            {saved.map(note => 
                <SavedNote  
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    showNote={showNote}
                    deleteNote={deleteNote}
                />    
            )}
        </SavedContainer>
    )
}

export default Saved
