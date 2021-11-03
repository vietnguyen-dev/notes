import React from 'react'

import styled from 'styled-components'

const App = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
`;

const Layout = ({children}) => {
    return <App>{children}</App>
}

export default Layout
