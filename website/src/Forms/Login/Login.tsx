import React, { Component } from "react";
import "./Login.css";

interface FormState {
  username: string;
  password: any;
  usernameError: string;
  passwordError: string;
}
export default class Login extends Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: { target: { name: any; value: any } }) {
    this.setState({ [event.target.name]: event.target.value } as Pick<FormState,keyof FormState>);
  }

  validate() {
    let usernameError = "";
    let passwordError = "";
    if (!this.state.username) {
      usernameError = "Enter valid user name";
    } else if (this.state.username !== "siva") {
      usernameError = "Invalid Username";
    }
    if (!this.state.password) {
      passwordError = "Enter valid Password";
    } else if (this.state.password !== "123456") {
      passwordError = "Invalid Password";
    }
    if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError });
      return false;
    }
    return true;
  }
  handleSubmit(event: any) {
    event.preventDefault();
     const isValid = this.validate();
     console.log(isValid);
     if (isValid) { //clearing the values on click
    this.setState({
      username: "",
      password: "",
      usernameError: "",
      passwordError: ""
    });
    }
  }
  render() {
    return (
      <div>
        <h4 className="M20">Login Form</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <p className="error">{this.state.usernameError}</p>
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
            />
            <p className="error">{this.state.passwordError}</p>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
