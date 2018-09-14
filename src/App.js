import React from 'react';
import styled from 'styled-components';

import Login from './Components/Login';
import Acme from './Components/Acme';

const App = () => (
  <Wrapper>
    <Login />
    <Acme />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-content: stretch;
  flex-direction: row;

  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      flex-direction: column-reverse;
    }
`;

export default App;
