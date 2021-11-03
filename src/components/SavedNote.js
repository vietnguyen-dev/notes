import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const SaveItem = styled.div`
  padding: 8% 5% 8% 5%;
  border-bottom: 0.5px solid rgba(211, 211, 211, 0.2);
`;

const SaveHead = styled.h3`
  font-size: 120%;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
`

const SaveText = styled.p`
  color: #d3d3d3;
  margin-top: 1%;
`;

const SavedNote = ({title, id, text, showNote}) => {
    const [current, setCurrent] = useState(false)

    let shortenTitle = title.length >20 ? `${title.slice(0, 20)}...` : title
    let shortenText = text.length > 30 ? `${text.slice(0, 30)}...` : text

    useEffect(() =>{
      setCurrent(false)
    }, [])

    const setCurrentNote = () =>{
      showNote(id)
      setCurrent(true)
    }

    return (
      <SaveItem onClick={setCurrentNote} className={`${current && `current`}`}>
          <SaveHead>{shortenTitle}</SaveHead>
          <SaveText>{shortenText}</SaveText>
      </SaveItem>
    );
}

export default SavedNote
