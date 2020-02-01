import React from "react";
import useForm from "./useForm";

function Form() {
  // Define your state schema
  const stateSchema = {
    name: { value: "", error: "" },
    number: { value: "", error: "" },
    email: { value: "", error: "" }
  };

  // Define your validationStateSchema
  // Note: validationStateSchema and stateSchema property
  // should be the same in-order validation works!
  const validationStateSchema = {
    name: {
      required: true,
      validator: {
        regEx: /[a-zA-Z]+/,
        error: "Invalid name format."
      }
    },
number: {
      required: true,
      validator: {
        regEx: /^[0-9]/,
        error: "Invalid number format."
      }
    },
    email: {
      required: true,
      validator: {
        regEx: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/,
        error: "Invalid email."
      }
    }
  };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const { state, handleOnChange, handleOnSubmit } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  const errorStyle = {
    color: "red",
    fontSize: "13px"
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">
            Name<span style={{color:"red  "}}>*</span>
            <input
              type="text"
              name="name"
              value={state.name.value}
              onChange={handleOnChange}
            />
          </label>
          {state.name.error && <p style={errorStyle}>{state.name.error}</p>}
        </div>

        <div>
          <label htmlFor="number">
            Number<span style={{color:"red  "}}>*</span>
            <input
              type="text"
              name="number"
              value={state.number.value}
              onChange={handleOnChange}
            />
          </label>
          {state.number.error && <p style={errorStyle}>{state.number.error}</p>}
        </div>

        <div>
          <label htmlFor="email">
            Email<span style={{color:"red"}}>*</span>
            <input
              type="text"
              name="email"
              value={state.email.value}
              onChange={handleOnChange}
            />
          </label>
          
          {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
        </div>

        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default Form;
