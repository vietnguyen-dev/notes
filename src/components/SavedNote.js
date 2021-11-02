import React from 'react'
import styled from 'styled-components'

const SaveItem = styled.div`
    margin: 5% 7%;
    padding: 3%;
    border-bottom: 1px solid grey;
    display: grid;
    grid-template-columns: 80% 20%;
`

const SavedNote = ({title, id, text, date, showNote}) => {

    const clickEvent = () =>{
        showNote(id)
    }

    return (
        <SaveItem onClick={clickEvent}>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <p>{id}</p>
            </div>
            <div>
                <p>{date}</p>
            </div>
        </SaveItem>
    )
}

export default SavedNote
