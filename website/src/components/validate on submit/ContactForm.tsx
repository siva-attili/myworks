import * as React from "react";
import "./ContactForm.css";
type FormState = {
  name: string;
  email: any;
  number: string;
  description: string;
  nameError: string;
  nameErrSign:string;
  emailError: string;
  emailErrSign:string;
  numberError: string;
  countrycode: string;
  numErrSign: string;
};
export default class ContactForm extends React.Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      description: "",
      nameError: "",
      nameErrSign:"",
      emailError: "",
      emailErrSign:"",
      numberError: "",
      countrycode: "91",
      numErrSign: ""
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
    let numErrSign = "";
    let nameErrSign="";
    let emailErrSign="";
    if (!this.state.name) {
      nameError = "username required";
      nameErrSign="err";
    } else if (!this.state.name.match(/^[a-zA-Z\s]+$/)) {
      nameError = "username must be alphabetical";
      nameErrSign="err";
    }
    if (!this.state.email) {
      emailError = "Email required";
      emailErrSign="err";
    } else if (
      !this.state.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i)
    ) {
      emailError = "Invalid email";
      emailErrSign="err";
    }
     if (!this.state.number || !this.state.countrycode) {
      numberError = "country code and mobile number required";
      numErrSign = "err";
    } 

    if (!this.state.number || !this.state.countrycode) {
      numberError = "Mobile number required";
      numErrSign = "err";
    } else if (
      !this.state.number.match(/^[0-9]{6,14}$/) ||
      !this.state.countrycode.match(/^(?:[0-9] ?){1,3}$/)
    ) {
      numberError = "invalid number";
    }
    if (nameError || emailError || numberError ) {
      this.setState({
        nameError,
        numberError,
        emailError,
        numErrSign,
        nameErrSign,
        emailErrSign
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
        nameErrSign:"",
        emailError: "",
        emailErrSign:"",
        numberError: "",
        countrycode: "",
        numErrSign: ""
      });
    }
  }
  render() {
    return (
      <div>
        <h2>ContactForm</h2>
        <form className="pi-contact-form" onSubmit={this.handleSubmit}>
          <div className="pi-contact-formgroup">
            <label htmlFor="#name">
              Name<span className="required">*</span>
            </label>
            <div>
              <input
                className={this.state.nameErrSign}
                name="name"
                placeholder="Enter your name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <p className="err-msg">{this.state.nameError}</p>
            </div>
          </div>
          <div className="pi-contact-formgroup">
            <label htmlFor="#email">
              Email<span className="required">*</span>
            </label>
            <div>
              <input
                className={this.state.emailErrSign}
                name="email"
                placeholder="Enter your email"
                onChange={this.handleChange}
                value={this.state.email}
                id="email"
              />
              <p className="err-msg">{this.state.emailError}</p>
            </div>
          </div>
          <div className="pi-contact-formgroup">
            <label htmlFor="#number">
              Mobile Number<span className="required">*</span>
            </label>
            <div className="pi-contact-pnum">
              <input
              className="pi-contact-form-input"
                name="countrycode"
                onChange={this.handleChange}
                id="number"
                value={this.state.countrycode}
              />
              <input
                className={this.state.numErrSign}
                name="number"
                onChange={this.handleChange}
                placeholder="Enter your number"
                id="number"
                value={this.state.number}
              />
            </div>
            <span className="err-msg" style={{ textAlign: "right" }}>
              {this.state.numberError}
            </span>
          </div>
          <div className="pi-contact-formgroup">
            <label htmlFor="#description">Description</label>
            <div>
              <textarea
                name="description"
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder="write something here"
              />
            </div>
          </div>
          <div className="pi-contact-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
