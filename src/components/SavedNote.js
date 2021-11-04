import React from 'react'
import styled from 'styled-components'

const SaveItem = styled.div`
  padding: 5% 8% 5% 8%;
  position: relative;
  z-index: 1;

  :after {
    content: "";
    border-bottom: 0.5px solid rgba(211, 211, 211, 0.2);
    position: absolute;
    left: 8%;
    bottom: 0;
    height: 1px;
    width: 80%; /* or 100px */
  }
`;

const SaveHead = styled.h3`
  font-size: 120%;
  font-weight: bold;
  letter-spacing: .5px;
  color: white;
`

const SaveText = styled.p`
  color: white;
  margin-top: 1%;
`;

const SavedNote = ({title, id, text, current, currentDate, showNote}) => {
    let shortenTitle = title.length >20 ? `${title.slice(0, 20)}...` : title
    let shortenText = text.length > 30 ? `${text.slice(0, 30)}...` : text


    const setCurrentNote = () => showNote(id)

    return (
      <SaveItem onClick={setCurrentNote} className={`${current && `current`}`}>
        <SaveHead>{shortenTitle}</SaveHead>
        <SaveText>
          {currentDate}
          {shortenText}
        </SaveText>
        {/* <SaveText></SaveText> */}
      </SaveItem>
    );
}

export default SavedNote
