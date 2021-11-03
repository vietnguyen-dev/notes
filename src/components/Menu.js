import React from 'react'
import styled from 'styled-components'
import write from '../img/notepad-32.png'

const NoteMenu = styled.ul`
    margin-left: 20%;
    display: flex;
    list-style-type: none;
`

const MenuContainer = styled.div`
    padding: 1% 1%;
    background-color: #342820;
    opacity: .9;
    color: white;
`

const Menu = ({newNote}) => {
    return (
        <MenuContainer>
            <NoteMenu>
                <li onClick={() => newNote()}><img src={write} alt='write new note'/></li>
                <li>DEL</li>
            </NoteMenu>
        </MenuContainer>
    )
}

export default Menu
