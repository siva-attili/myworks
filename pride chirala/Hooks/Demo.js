import * as React from "react";
const myFunction=()=> {
    let x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }
export default function Demo() {
  // function myFunction(){
  //     let x = document.getElementById("id1");
  //     if(!x.checkValidity()){
  //         document.getElementById("demo").innerHTML = x.validationMessage;
  //     }
  //     else{
  //         document.getElementById("demo").innerHTML = "Input OK";
  //     }
  // }
 
  return (
    <div>
      <form>
        <input id="numb" />
        <button onClick={myFunction}>submit</button>
        <p id="demo"></p>
      </form>
    </div>
  );
}
