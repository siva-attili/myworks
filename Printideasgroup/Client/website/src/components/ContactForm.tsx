import * as React from "react";
import Recaptcha from "react-recaptcha";
import "./ContactForm.css";

type FormState = {
  name: string;
  email: any;
  number: string;
  description: string;
  nameError: string;
  nameErrSign: string;
  emailError: string;
  emailErrSign: string;
  isVerified: boolean;
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
      nameErrSign: "",
      emailError: "",
      emailErrSign: "",
      isVerified:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyCaptcha=this.verifyCaptcha.bind(this);
    this.verifyCallback=this.verifyCallback.bind(this);
    this.handleCaptcha=this.handleCaptcha.bind(this);
    this.onLoadCallback=this.onLoadCallback.bind(this);
  }
  
  handleChange(event: { target: { name: any; value: any } }) {
    this.setState({ [event.target.name]: event.target.value } as Pick<
      FormState,
      keyof FormState
    >);
  }
  validateName = () => {
    if (!this.state.name) {
      this.setState({
        nameError: "username required",
        nameErrSign: "err"
      });
      return false;
    } else if (!this.state.name.match(/^[a-zA-Z\s]+$/)) {
      this.setState({
        nameError: "Only alphabets allowed",
        nameErrSign: "err"
      });
      return false;
    } else {
      this.setState({
        nameError: "",
        nameErrSign: ""
      });
      return true;
    }
  };
  validateEmail = () => {
    if (!this.state.email) {
      this.setState({
        emailError: "email required",
        emailErrSign: "err"
      });
      return false;
    } else if (
      !this.state.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i)
    ) {
      this.setState({
        emailError: "invalid email",
        emailErrSign: "err"
      });
      return false;
    } else {
      this.setState({
        emailError: "",
        emailErrSign: ""
      });
      return true;
    }
  };
  validate() {
    const __checkNameValidation = this.validateName();
    const __checkEmailValidation = this.validateEmail();
    if (__checkEmailValidation && __checkNameValidation) {
      return true;
    } else {
      return false;
    }
  }
  verifyCallback(response:any){
    if(response){
      this.setState({
        isVerified:true
      })
    }
  }
  verifyCaptcha(){
    if(this.state.isVerified){
      return true;
    }else{
      alert('Please, complete recaptcha');
      return false;
    }
  }
  handleCaptcha(){
    if(this.recaptchaInstance.current){
      this.recaptchaInstance.current.reset();
    }
  }
  onLoadCallback(){
    console.log('recaptcha loaded!');
  }
  handleSubmit(event: any) {
    event.preventDefault();
    const isValid = this.validate();
    const isCaptchaValid=this.verifyCaptcha();
    if (isValid && isCaptchaValid) {
      console.log(this.state);
      document.getElementById("alert").innerHTML = "Submitted Successfully";
      this.setState({
        name: "",
        email: "",
        number: "",
        description: "",
        nameError: "",
        nameErrSign: "",
        emailError: "",
        emailErrSign: ""
      });
      fetch("http://localhost:3002/contactEmail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          number: this.state.number,
          description: this.state.description
        })
      });
    }
  }
  private recaptchaInstance=React.createRef<Recaptcha>();
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
            <label className="pi-contact-form-label" htmlFor="#number">
              Mobile Number
            </label>
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
            <label className="pi-contact-form-label" htmlFor="#description">
              Description
            </label>
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
          <div className="pi-contact-formgroup">
            <div></div>
            <Recaptcha
              ref={this.recaptchaInstance}
              sitekey="6Lf1FM0UAAAAACfK28tYKiVAc7gWsvot4neBGYZA"
              render="explicit"
              verifyCallback={this.verifyCallback}
              onloadCallback={this.onLoadCallback}
            />
          </div>
          <div className="pi-contact-submit">
            <input type="submit" value="Submit" onClick={this.handleCaptcha} />
            <div id="alert" />
          </div>
        </form>
      </div>
    );
  }
}
