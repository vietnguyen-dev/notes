import React, {useState} from 'react'
import styled from 'styled-components'

const SaveItem = styled.div`
    margin: 5% 7%;
    padding: 3%;
    border-bottom: 1px solid grey;
    display: grid;
    grid-template-columns: 80% 20%;
`

const SavedNote = ({title, id, text, showNote, deleteNote}) => {
    const [options, showOptions] = useState(false)

    return (
      <SaveItem onClick={() => showNote(id)}>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div>
          {options ? (
            <>
              <button onClick={() => showNote(id)}>SHOW</button>
              <button onClick={() => deleteNote(id)}>X</button>
            </>
          ) : (
            <button onClick={() => showOptions(!options)}>...</button>
          )}
        </div>
      </SaveItem>
    );
}

export default SavedNote
