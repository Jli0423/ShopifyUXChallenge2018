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
`;

export default App;
