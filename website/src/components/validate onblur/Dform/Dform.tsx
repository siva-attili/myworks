import * as React from "react";
  import "./Dform.css";
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
    error:string;
  };
  export default class Dform extends React.Component<{}, FormState> {
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
        numErrSign: "",
        error:""
       
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.validateEmail = this.validateEmail.bind(this);
      this.validateName = this.validateName.bind(this);
      this.validateNumber=this.validateNumber.bind(this);
    }
    handleChange(event: { target: { name: any; value: any } }) {
      this.setState({ [event.target.name]: event.target.value } as Pick<
        FormState,
        keyof FormState
      >);
    }
    validateName(event:any){
      event.preventDefault();
      if (!this.state.name) {
        this.setState({nameError:"Username required",nameErrSign:"err"});
      } else if (!this.state.name.match(/^[a-zA-Z\s]+$/)) {
        this.setState({nameError:"Only alphabets allowed",nameErrSign:"err"});
      }
      else{ this.setState({nameError:"",nameErrSign:""});}
    }
   validateEmail(event:any){
     event.preventDefault();
     if(!this.state.email){
       this.setState({emailError:"required",emailErrSign:"err"});
     }
     else if (
      !this.state.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i)
      ) {
         this.setState({emailError:"invalid email",emailErrSign:"err"});
      }
     else{  this.setState({emailError:"",emailErrSign:""});}
     }
     validateNumber(event:any){
       event.preventDefault();
      if (!this.state.number || !this.state.countrycode) {
        this.setState({numberError:"mobile number and country code cannot be an empty",numErrSign:"err"});
      } else if (
        !this.state.number.match(/^[0-9]{6,14}$/) ||
        !this.state.countrycode.match(/^(?:[0-9] ?){1,3}$/)
      ) {
        this.setState({numberError:"invalid number",numErrSign:"err"});
      }
      else{ this.setState({numberError:"",numErrSign:""});}
     }
    validate() {
      if (!this.state.name || !this.state.email || !this.state.number ) {
        this.setState({
        error:"please fillout the required fields",
        nameErrSign:"err",
        numErrSign:"err",
        emailErrSign:"err"
        });
        return false
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
          countrycode: "91",
          numErrSign: "",
          error:""
        });
      }
    }
    render() {
     
      return (
        <div>
          <h2>ContactForm</h2>
          <form className="pi-contact-form" onSubmit={this.handleSubmit} >
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
                  onBlur={this.validateName}
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
                  onBlur={this.validateEmail}
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
                  onBlur={this.validateNumber}
                />
                <input
                  className={this.state.numErrSign}
                  name="number"
                  onChange={this.handleChange}
                  placeholder="Enter your number"
                  id="number"
                  value={this.state.number}
                  onBlur={this.validateNumber}
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
              <p className="err-msg"> {this.state.error} </p>
            </div>
          </form>
        </div>
      );
    }
  }

