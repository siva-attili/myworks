import * as React from "react";
import "./Tform.css";
type FormState = {
  name: string;
  email: any;
  number: string;
  description: string;
  nameError: string;
  emailError: string;
  numberError: string;
  errActiveClass: string;
  countrycode: string;
};
export default class Tform extends React.Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      description: "",
      nameError: "",
      emailError: "",
      numberError: "",
      errActiveClass: "",
      countrycode: "91"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: { target: { name: any; value: any } }) {
    this.setState({ [event.target.name]: event.target.value } as Pick<
      FormState,
      keyof FormState
    >);
  }
  validate() {
    let nameError = "";
    let emailError = "";
    let numberError = "";
    let errActiveClass = "";
    if (!this.state.name) {
      nameError = "username required";
    } else if (!this.state.name.match(/^[a-zA-Z\s]+$/)) {
      nameError = "username must be alphabetical";
    }
    if (!this.state.email) {
      emailError = "Email required";
    } else if (
      !this.state.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i)
    ) {
      emailError = "Invalid email";
    }
    
    if (!this.state.number && !this.state.countrycode) {
      numberError = "mobile number required";
    } else if (!this.state.number.match(/^[0-9]{6,14}$/) && !this.state.countrycode.match(/^\+(?:[0-9] ?){1,3}$/)) {
      numberError =
        "invalid number";
    }
    if (nameError || emailError || numberError || errActiveClass) {
      this.setState({
        nameError,
        numberError,
        emailError,
        errActiveClass: "err"
      });
      return false;
    }
    return true;
  }
  handleSubmit(event: any) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState({
        name: "",
        email: "",
        number: "",
        description: "",
        nameError: "",
        emailError: "",
        numberError: "",
        errActiveClass: "",
        countrycode: ""
      });
    }
  }
  render() {
    return (
      <div>
        <h4>Contact Form</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="w20">
              <label htmlFor="#name">
                Name <span className="required">*</span>
              </label>
            </div>
            <div className="w40">
              <input
                name="name"
                className={this.state.errActiveClass}
                placeholder="Enter your name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="w20">
              <p className="err-msg">{this.state.nameError}</p>
            </div>
          </div>
          <div className="row">
            <div className="w20">
              <label htmlFor="#number">
                Number <span className="required">*</span>
              </label>
            </div>
            <div className="w10">
            <input
                name="countrycode"
                onChange={this.handleChange}
                placeholder="Enter your country code"
                id="number"
                value={this.state.countrycode}
              />
            </div>
            <div className="w40"> 
              <input
              name="number"
                className={this.state.errActiveClass}
                onChange={this.handleChange}
                placeholder="Enter your number"
                id="number"
                value={this.state.number}
              />
            </div>
            <div className="w20">
              <p className="err-msg">{this.state.numberError}</p>
            </div>
          </div>
          <div className="row">
            <div className="w20">
              <label htmlFor="#email">
                Email <span className="required">*</span>
              </label>
            </div>
            <div className="w40">
              <input
                name="email"
                className={this.state.errActiveClass}
                placeholder="Enter your email"
                onChange={this.handleChange}
                value={this.state.email}
                id="email"
              />
            </div>
            <div className="w20">
              <p className="err-msg">{this.state.emailError}</p>
            </div>
          </div>
          <div className="row">
            <div className="w20">
              <label htmlFor="#description">Description </label>
            </div>
            <div className="w40">
              <textarea
                name="description"
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder="write something here"
              />
            </div>
            <div className="w20">
              <p></p>
            </div>
          </div>
          <div className="btn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
