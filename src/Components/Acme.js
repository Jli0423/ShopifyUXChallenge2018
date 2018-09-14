import React from 'react';
import styled from 'styled-components';

import AcmeLogo from '../Img/logo-acmestack.svg';

import Colors from '../Data/Colors';

const Acme = () => (
  <Wrapper>
    <Container>
      <Title>
        AcmeStack
      </Title>
      <Logo
        src={AcmeLogo}
        alt="Acme"
      />
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 1 0 50%;
  background-color: ${Colors.DarkPurple};
  color: black;
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 4em;
  color: ${Colors.LightPurpleLight};
`;

const Logo = styled.img`
  width: 5em;
  background-color: ${Colors.White};
  border-radius: 5px;
  padding: 1em;

`;

export default Acme;
