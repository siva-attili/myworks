import React, { Component } from "react";
import './SignUp.css';
type FormState = {
  name: string;
  email: any;
  number: string;
  description: string;
  nameError: string;
  emailError: string;
  numberError: string;
};
const initialState = {
  name: "",
  email: "",
  number: "",
  description: "",
  nameError: "",
  emailError: "",
  numberError: ""
};
export default class Signup extends Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(event: any) {
    this.setState({
      name: event.target.value
    });
  }
  handleEmail(event: any) {
    this.setState({
      email: event.target.value
    });
  }
  handleNumber(event: any) {
    this.setState({
      number: event.target.value
    });
  }
  handleQuery(event: any) {
    this.setState({
      description: event.target.value
    });
  }

  validate() {
    let nameError = "";
    let emailError = "";
    let numberError = "";
    if (!this.state.name) {
      nameError = "username required";
    } else if (this.state.name.length < 3) {
      nameError = "username atleast have 4 characters";
    }
    if (!this.state.email) {
      emailError = "Email required";
    }
    else if(!this.state.email.match(/^[a-z0-9._%+-]+@[a-z.]+\.[a-z]{2,}$/i)){
        emailError = "Invalid email";
    }

    if (!this.state.number) {
      numberError = "mobile number required";
    }
    else if(!this.state.number.match(/^[0-9]{10}/i)){
        numberError = "please check your mobile number must have 10 digits"
    }
    if (nameError || emailError || numberError) {
      this.setState({ nameError, numberError, emailError });
      //clear
      return false;
    }
    return true;
  }
  handleSubmit(event: any) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  }
  render() {
    return (
      <div>
        <h4>Signup Form</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
          <label>
              Name<span className="required">*</span>
            </label>
           <input
              name="name"
              value={this.state.name}
              onChange={this.handleName}
              placeholder="Enter your name"
            />
           <p className="required">{this.state.nameError}</p>
            
          </div>
          <div className="form-group">
            <label >
              Email<span className="required">*</span>
            </label>
            <input
              type="email`"
              name="email"
              value={this.state.email}
              onChange={this.handleEmail}
              placeholder="Enter Email"
            />
            <p className="required">{this.state.emailError}</p>
          </div>
          <div className="form-group">
            <label>
              Mobile Number<span className="required">*</span>
            </label>
            <input
              name="number"
              value={this.state.number}
              onChange={this.handleNumber}
              placeholder="Enter Mobile Number"
              title="must have 10 digits"
            />
            <p className="required">{this.state.numberError}</p>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleQuery}
            />
          </div>
          <div>
            <button className="btn">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}
