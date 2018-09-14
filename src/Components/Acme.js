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
      <LogoContainer>
        <Logo
          src={AcmeLogo}
          alt="Acme"
        />
      </LogoContainer>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 1 0 50%;
  background-color: ${Colors.DarkPurple};
  color: black;
  position: relative;
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      flex: 1 0 45%;
    }
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

  @media only screen 
    and (device-width : 320px) 
    and (device-height : 568px) {
      top: 30%;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: .7em;
  color: ${Colors.LightPurpleLight};
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      margin-bottom: .2em;
    }

  @media only screen 
    and (device-width : 320px) 
    and (device-height : 568px) {
      font-size: 3em;
      margin-bottom: .2em;
  }
`;

const LogoContainer = styled.div`
  width: calc(5em + 14px);
  height: calc(5em + 14px);
  background: linear-gradient(45deg, ${Colors.DarkPurple}, ${Colors.LightPurpleDark});
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 4em;
  background-color: ${Colors.White};
  border-radius: 10px;
  padding: 1em;
`;

export default Acme;
