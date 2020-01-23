import * as React from "react";
import "./Cform.css";
type FormState = {
  name: string;
  email: any;
  number: string;
  description: string;
  nameError: string;
  nameErrSign: string;
  emailError: string;
  emailErrSign: string;
};
export default class Cform extends React.Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      description: "",
      nameError: "",
      nameErrSign: "",
      emailError: "",
      emailErrSign: ""
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
     
    if (nameError || emailError) {
      this.setState({
        nameError,
        emailError,
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
      window.confirm('Form successfully submitted');
      this.setState({
        name: "",
        email: "",
        number: "",
        description: "",
        nameError: "",
        nameErrSign:"",
        emailError: "",
        emailErrSign:"",
       });
    }
  }
  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form className="pi-contact-form" onSubmit={this.handleSubmit}>
          <div className="pi-contact-formgroup">
            <label className="pi-contact-form-label" htmlFor="#name">
              Name<span className="required">*</span>
            </label>
            <div className="picontact">
              <input
                className={this.state.nameErrSign}
                name="name"
                placeholder="Enter your name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              
              />
              <span className="err-msg">{this.state.nameError}</span>
            </div>
          </div>
          <div className="pi-contact-formgroup">
            <label className="pi-contact-form-label" htmlFor="#email">
              Email<span className="required">*</span>
            </label>
            <div className="picontact">
              <input
                className={this.state.emailErrSign}
                name="email"
                placeholder="Enter your email"
                onChange={this.handleChange}
                value={this.state.email}
                id="email"
                
              />
              <span className="err-msg">{this.state.emailError}</span>
            </div>
          </div>
          <div className="pi-contact-formgroup">
            <label className="pi-contact-form-label" htmlFor="#number">Mobile Number</label>
            <div className="picontact">
              <input
                name="number"
                type="tel"
                onChange={this.handleChange}
                placeholder="Enter your number"
                id="number"
                pattern="[+]?[0-9- ]{6,14}"
                value={this.state.number}
              
              />
            </div>
          </div>
          <div className="pi-contact-formgroup">
            <label className="pi-contact-form-label" htmlFor="#description">Description</label>
            <div className="picontact">
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
