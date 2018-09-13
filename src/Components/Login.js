import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from '../Data/Colors';

class Login extends Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.usernameRef = React.createRef();
    this.state = {
      userSubmit: false,
      username: '',
      usernameValid: false,
      password: '',
      passwordValid: false,
    };
  }

  userLogin(e) {
    const username = this.usernameRef.value;
    const password = this.passwordRef.value;
    e.preventDefault();
    if (username.length > 0) {
      this.setState({
        usernameValid: true,
      });
    }

    if (password.length > 7 && password.length < 25) {
      this.setState({
        passwordValid: true,
      });
    }

    if (username.length === 0) {
      this.setState({
        usernameValid: false,
      });
    }

    if (password.length < 8 || password.length > 25) {
      this.setState({
        passwordValid: false,
      });
    }

    this.setState({
      username,
      password,
      userSubmit: true,
    });
  }

  render() {
    const {
      username,
      password,
      userSubmit,
      usernameValid,
      passwordValid,
    } = this.state;

    return (
      <Wrapper>
        <Form>
          <Input
            innerRef={(usernameRef) => { this.usernameRef = usernameRef; }}
            placeholder="username"
            type="text"
          />
          <Input
            innerRef={(passwordRef) => { this.passwordRef = passwordRef; }}
            placeholder="password"
            type="password"
          />
          <Submit
            onClick={(click) => { this.userLogin(click); }}
          >
            login
          </Submit>
        </Form>
        {
            userSubmit && !usernameValid && (
            <ErrorStatement>
              username must not be empty
            </ErrorStatement>
            )
          }
        {
            userSubmit && !passwordValid && (
            <ErrorStatement>
              password must be between 8 and 24 characters
            </ErrorStatement>
            )
          }
        <RememberMe>
          <Checkbox
            type="checkbox"
          />
          <Label>
            remember me
          </Label>
        </RememberMe>
      </Wrapper>
    );
  }
}

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
  box-shadow: 0 1px 15px rgba(0,0,0, .25);
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
  font-size: 1.6em;
  color: ${Colors.DarkPurple};
  border: 1px solid ${Colors.LightPurple};
  font-weight: 600;
  outline: none;

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
  font-weight: 600;
  font-size: 1.6em;
`;

const RememberMe = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Checkbox = styled.input`
  margin-right: 2em;
  appearance: none;
  outline: none;

  &:checked::before {
    content: '';
    position: absolute;
    top: 1em;
    left: 0;
    transform: translate(-50%, -50%);
    width: 1.5em;
    height: 1.5em;
    margin-top: -.5em;
    background-color: ${Colors.DarkPurpleDark};
    border-radius: 3px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1em;
    left: 0;
    transform: translate(-50%, -50%);
    width: 1.5em;
    height: 1.5em;
    margin-top: -.5em;
    border-radius: 3px;
    box-shadow: 0 0 0 1px ${Colors.DarkPurpleDark};
    border: 3px solid ${Colors.LightPurpleLight};
  }
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 1.5em;
  color: ${Colors.DarkPurpleDark};
`;

const ErrorStatement = styled.span`
  font-size: 1.2em;
  color: ${Colors.Red};
`;

export default Login;
