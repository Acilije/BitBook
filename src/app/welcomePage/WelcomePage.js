import React, { Component } from "react";
import { authService } from "../../services/AuthenticationService";
import LoginForm from "./Login";

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      personName: "",
      registerEmail: "",
      registerPassword: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  setInputs = event => {
    if (event.target.name === "loginEmail") {
      this.setState({
        loginEmail: event.target.value
      });
    } else if (event.target.name === "loginPassword") {
      this.setState({
        loginPassword: event.target.value
      });
    } else if (event.target.name === "registerPassword") {
      this.setState({
        registerPassword: event.target.value
      });
    } else if (event.target.name === "registerEmail") {
      this.setState({
        registerEmail: event.target.value
      });
    } else if (event.target.name === "personName") {
      this.setState({
        personName: event.target.value
      });
    }
  };

  clickLogin = () => {
    authService.login(this.state.loginEmail, this.state.loginPassword)
      .then(userInfo => {
        this.props.loggedIn(true);

        window.location = "/";
      });
  };

  clickRegister = () => {
    authService
      .register(
        this.state.personName,
        this.state.registerPassword,
        this.state.personName,
        this.state.registerEmail
      )
      .then(response => {
        if (response) {
          window.location = "/login";
        }
      });
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col m6 blue-grey-text text-darken-3">
            <h4>Bitbook Login</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="row">
            <div className="col m6">
              <LoginForm
                sendInput={this.setInputs}
                login={this.clickLogin}
                register={this.clickRegister}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
