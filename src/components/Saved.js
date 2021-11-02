import React from 'react'
import SavedNote from './SavedNote'
import styled from 'styled-components'

const SavedContainer = styled.div`
    background-color: #342820;
    opacity: .9;
    color: white;
    padding: 2% 3%;
`

const Saved = ({saved, showNote}) => {
    return (
        <SavedContainer>
            {saved.map(note => 
                <SavedNote  
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    date={note.currentdate}
                    showNote={showNote}
                />    
            )}
        </SavedContainer>
    )
}

export default Saved
