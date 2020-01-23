import * as React from "react";
import "./ContactForm.css";


type FormState = {
  name: string;
  email: any;
  number: string;
  description: string;
  nameError: string;
  emailError: string;
  numberError: string;
  errActiveClass: string;
  code:string;
};
const initialState = {
  name: "",
  email: "",
  number: "",
  description: "",
  nameError: "",
  emailError: "",
  numberError: "",
  errActiveClass: "",
  code:"+91",
};
export default class ContactForm extends React.Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
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
    if (!this.state.number) {
      numberError = "mobile number required";
    } else if (!this.state.number.match(/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/)) {
      numberError = "number must have 10 digits ";
    }
    if (nameError || emailError || numberError || errActiveClass) {
      this.setState({ nameError, numberError, emailError, errActiveClass: "err" });
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
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="#name">
                Name
                <span className="required">*</span>
              </label>
            </div>
            <div className="col-75 M20">
              <input
                name="name"
                className={this.state.errActiveClass}
                placeholder="Enter your name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div>
                <p className="err-msg">{this.state.nameError}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="#number">
                Mobile Number
                <span className="required">*</span>
              </label>
            </div>
             <div className="col-75 number">
           
            <select name="code" value={this.state.code} onChange={this.handleChange}>
              <option value="+91">IND</option>
              <option value="+61">AUS</option>
              <option value="+1">CANADA</option>
              <option value="+1">USA</option>
              <option value="+971">UAE</option>
              <option value="+44">UK</option>
           </select>
            <input
                name="number"
                onChange={this.handleChange}
                placeholder="Enter your number"
                id="number"
                value={this.state.code}
                readOnly
               
              />
            <input
                name="number"
                className={this.state.errActiveClass}
                onChange={this.handleChange}
                placeholder="Enter your number"
                id="number"
                value={this.state.number}
              
              /> 
              <div>
                <p className="err-msg">{this.state.numberError}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="#email">
                Email
                <span className="required">*</span>
              </label>
            </div>
            <div className="col-75">
              <input
                name="email"
                className={this.state.errActiveClass}
                placeholder="Enter your email"
                onChange={this.handleChange}
                value={this.state.email}
                id="email"
              />
              <div>
                <p className="err-msg">{this.state.emailError}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="description">Description</label>
            </div>
            <div className="col-75">
              <textarea
                name="description"
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder="write something here"
                title="allows both alphabets and numerics"
              />
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
