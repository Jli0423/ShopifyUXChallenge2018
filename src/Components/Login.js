import React from 'react';
import styled from 'styled-components';

import Colors from '../Data/Colors';

const Login = () => (
  <Wrapper>
    <Form>
      <Input
        placeholder="username"
        type="text"
      />
      <Input
        placeholder="password"
        type="password"
      />
      <Submit>
        Login
      </Submit>
    </Form>

  </Wrapper>
);

const Wrapper = styled.div`
  flex: 1 0 50%;
  background-color: ${Colors.LightPurpleLight};
  color: black;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 20px rgba(0,0,0, .2);
  width: 30em;
  height: 15em;
`;

const Input = styled.input`
  width: 100%;
  height: 33%;
  padding: 0;
  margin: 0;
  border: none;
  text-align: center;
  font-size: 2em;
  color: ${Colors.DarkPurple};
  border: 1px solid ${Colors.LightPurple};
  font-weight: 700;

  &::placeholder {
    color: ${Colors.LightPurpleDark};
  }
`;

const Submit = styled.button`
  width: 100%;
  height: 33%;
  padding: 0;
  margin: 0;
  border: none;
  background-color: ${Colors.DarkPurpleDark};
  color: ${Colors.White};
  font-weight: 700;
`;

export default Login;
