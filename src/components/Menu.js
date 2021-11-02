import React from 'react'
import styled from 'styled-components'

const NoteMenu = styled.ul`
    margin-left: 20%;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    list-style-type: none;
`

const MenuContainer = styled.div`
    padding: 1% 1%;
    background-color: #342820;
    opacity: .9;
    color: white;
`

const Menu = () => {
    return (
        <MenuContainer>
            <NoteMenu>
                <li>ADD</li>
                <li>DEL</li>
            </NoteMenu>
        </MenuContainer>
    )
}

export default Menu
