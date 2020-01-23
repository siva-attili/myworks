import * as React from "react";
import "./Form.css";
const Form: React.FC = () => {
  const [data] = React.useState([
    {
      label: "Name",
      for: "cname",
      type: "text",
      plchdlr: "Enter Your Name",
      text: "must be alphabets/numeric/alphanumeric ",
      ptrn:"([a-zA-Z\s]){2,},} "
    },
    {
      label: "Contact Number",
      for: "cnum",
      type: "text",
      plchdlr: "Enter Your Number",
      text: "Must be numerical",
      ptrn:"[0-9]{6,12}"
      
    },
    {
      label: "Email Address",
      for: "email",
      type: "email",
      plchdlr: "Enter Your Email",
      text: "must include @",
      ptrn:"[a-z0-9._%+-]+@[a-z.]+\.[a-z]{2,}$"
    }
  ]);
  return (
    <div>
      <form action="">
        {data.map((fdata, index) => (
          <div key={index} className="row">
            <div className="col-25">
              <label htmlFor={fdata.for}>{fdata.label}
              <span className="required">
                *</span></label>
            </div>
            <div className="col-75">
              <input
                type={fdata.type}
                placeholder={fdata.plchdlr}
                id={fdata.for}
                title={fdata.text}
                pattern={fdata.ptrn}
                required
                style={{width:100}}
              />
              <span>ex: 8102654658</span>
              <p className="err-msg"></p>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-25">
            <label htmlFor="description">Description</label>
          </div>
          <div className="col-75">
            <textarea
              id="description"
              placeholder="write something here"
              title="allows both alphabets and numerics"
            />
            <p className="err-msg"></p>
          </div>
        </div>
        <div className="btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Form;
