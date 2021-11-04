import React from 'react'
import styled from 'styled-components'
import write from '../img/notepad-32.png'
import del from '../img/delete-32.png'

const NoteMenu = styled.ul`
    margin-left: 12%;
    display: flex;
    list-style-type: none;
`

const MenuContainer = styled.div`
  padding: 1%;
  background-color: #160804;
  opacity: 0.9;
  color: white;
`;

const Menu = ({newNote, delNote}) => {
    return (
      <MenuContainer>
        <NoteMenu>
          <li onClick={() => delNote()}><img src={del} alt="delete current item"/></li>
          <li onClick={() => newNote()}>
            <img src={write} alt="write new note" />
          </li>
        </NoteMenu>
      </MenuContainer>
    );
}

export default Menu
