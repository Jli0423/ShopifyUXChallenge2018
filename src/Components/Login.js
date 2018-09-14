import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import Colors from '../Data/Colors';

import Google from '../Img/logo-google.svg';
import Facebook from '../Img/logo-facebook.svg';
import twitter from '../Img/logo-twitter.svg';
import Load from '../Img/icon-loading.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.usernameRef = React.createRef();
    this.state = {
      userSubmit: false,
      usernameValid: false,
      passwordValid: false,
      loadingState: false,
    };
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  timer() {
    const { countDown } = this.state;
    this.setState({
      countDown: countDown - 1,
    });
    if (countDown === 1) {
      clearInterval(this.intervalId);
      this.setState({
        loadingState: true,
      });
    }
  }

  userLogin(e) {
    const username = this.usernameRef.value;
    const password = this.passwordRef.value;
    let usernameValid = false;
    let passwordValid = false;
    e.preventDefault();
    if (username.length > 0) {
      usernameValid = true;
      this.setState({
        usernameValid,
      });
    } else {
      usernameValid = false;
      this.setState({
        usernameValid,
      });
    }

    if (password.length > 7 && password.length < 25) {
      passwordValid = true;
      this.setState({
        passwordValid,
      });
    } else {
      passwordValid = false;
      this.setState({
        passwordValid,
      });
    }

    this.setState({
      userSubmit: true,
    });

    if (usernameValid && passwordValid) {
      this.intervalId = setInterval(this.timer.bind(this), 1000);
      this.setState({
        countDown: 1,
      });
    }
  }

  signOut() {
    this.setState({
      loadingState: false,
    });
  }

  renderLogin() {
    const {
      userSubmit,
      usernameValid,
      passwordValid,
      countDown,
    } = this.state;
    return (
      <div>
        <Form>
          <UserInput
            usernameValid={usernameValid}
            userSubmit={userSubmit}
            innerRef={(usernameRef) => { this.usernameRef = usernameRef; }}
            placeholder="username"
            type="text"
          />
          <PasswordInput
            passwordValid={passwordValid}
            userSubmit={userSubmit}
            innerRef={(passwordRef) => { this.passwordRef = passwordRef; }}
            placeholder="password"
            type="password"
          />
          <Submit
            onClick={(click) => { this.userLogin(click); }}
          >
            {
              !countDown ? <span>login</span> : (
                <Loading
                  src={Load}
                />
              )
            }
          </Submit>
        </Form>
        <ErrorContainer>
          {
            userSubmit && !usernameValid && (
            <ErrorStatement>
              username must not be empty
            </ErrorStatement>
            )
          }
          {/* will only show one error at a time
          to keep UI less clustered */}
          {
            userSubmit && !passwordValid && usernameValid && (
            <ErrorStatement>
              password must be between 8 and 24 characters
            </ErrorStatement>
            )
          }
        </ErrorContainer>
        <RememberMe>
          <Checkbox
            type="checkbox"
          />
          <Label>
            remember me
          </Label>
        </RememberMe>
        <SocialMediaContainer>
          <SocialMediaLabel>
            or login with
          </SocialMediaLabel>
          <IconContainer>
            <Icon
              src={Google}
            />
            <Icon
              src={Facebook}
            />
            <Icon
              src={twitter}
            />
          </IconContainer>
        </SocialMediaContainer>
      </div>
    );
  }

  renderLoggedIn() {
    return (
      <LoggedInWrapper>
        <LogginedInLabel>
          <Congrats>
            Congratulations
          </Congrats>
          <Caption>
            You have successfully logged in.
          </Caption>
          <SignOutButton
            onClick={() => { this.signOut(); }}
          >
            sign out
          </SignOutButton>
        </LogginedInLabel>

      </LoggedInWrapper>
    );
  }

  render() {
    const { loadingState } = this.state;
    console.log(loadingState);
    return (
      <Wrapper>
        {
          !loadingState ? this.renderLogin() : this.renderLoggedIn()
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  flex: 1 0 50%;
  background-color: ${Colors.LightPurpleLight};
  color: black;
  position: relative;
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      flex: 1 0 55%;
    }
`;

const LoggedInWrapper = styled.div`
  background-color: ${Colors.DarkPurple};
  width: 100%;
  height: 100%;
`;

const LogginedInLabel = styled.div`
  color: ${Colors.White};
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      top: 0%;
      width: 100%;
    }
`;

const Congrats = styled.div`
  font-size: 2.5em;
`;

const Caption = styled.div`
  font-size: 1.4em;
  margin-top: .5em;
`;

const SignOutButton = styled.button`
  height: 2em;
  width: 9em;
  background: ${Colors.White};
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 2em;
  color: ${Colors.DarkPurple};
  font-weight: 600;
  margin-top: 14em;
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      margin-top: 7em;
    }
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
  box-shadow: 0 1px 20px rgba(0,0,0, .15);
  width: 30em;
  border-radius: 5px;
  height: 18em;
  z-index: 100;

    @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      top: -7%;
    }
`;

const Input = styled.input`
  width: 100%;
  height: 33%;
  padding: 0;
  margin: 0;
  border: none;
  text-align: center;
  font-size: 1.8em;
  color: ${Colors.DarkPurple};
  border-bottom: 1px solid ${Colors.LightPurple};
  font-weight: 600;
  outline-offset: -2px;
  outline: none;
  &::placeholder {
    color: ${Colors.LightPurpleDark};
  }
`;

const UserInput = Input.extend`
  border-radius: 5px 5px 0 0;
  outline: ${props => !props.usernameValid && props.userSubmit && `3px solid ${Colors.Red};`};
  /* outline-offset: ${props => !props.usernameValid && props.userSubmit && '-2px'}; */
`;

const PasswordInput = Input.extend`
  outline: ${props => !props.passwordValid && props.userSubmit && `3px solid ${Colors.Red};`};
  /* outline-offset: ${props => !props.usernameValid && props.userSubmit && '-2px'}; */
`;


const Submit = styled.button`
  width: 100%;
  height: 33%;
  padding: 0;
  margin: 0;
  border: none;
  background-color: ${Colors.DarkPurple};
  color: ${Colors.White};
  font-weight: 600;
  font-size: 1.6em;
  outline: none;
  border-radius: 0 0 5px 5px;
`;

const RememberMe = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      top: 35%;
    }
`;

const Checkbox = styled.input`
  margin-right: 1.2em;
  appearance: none;
  outline: none;

  &:checked::before {
    content: '';
    position: absolute;
    top: 1em;
    left: 0;
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    margin-top: -.5em;
    background-color: ${Colors.DarkPurple};
    border-radius: 3px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1em;
    left: 0;
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    margin-top: -.5em;
    border-radius: 3px;
    box-shadow: 0 0 0 1px ${Colors.DarkPurpleDark};
    border: 3px solid ${Colors.LightPurpleLight};
  }
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 1.5em;
  color: ${Colors.DarkPurple};
`;

const ErrorContainer = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  color: ${Colors.Red};
  transform: translate(-50%, -50%);
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      top: 22%;
    }
`;

const ErrorStatement = styled.div`
  font-size: 1.7em;
  font-weight: 600;
  text-align: center;
  width: 60%;
  margin: 0 auto;
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) {
      width: 105%;
    }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 90%
  transform: translate(-50%, -50%);
`;

const SocialMediaLabel = styled.span`
  color: ${Colors.DarkPurple};
  font-size: 2em;
  font-weight: 600;
  margin-bottom: .2em;
  font-style: italic;;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.img`
  width: 1.5em;
  height: 1.5em;
  padding: .8em;
  margin: 1em;
  border-radius: 50%;
  background-color: ${Colors.LightPurple};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.img`
  width: 1.5em;
  height: 1.5em;
  animation: ${rotate360} 1s linear infinite;
`;

export default Login;
