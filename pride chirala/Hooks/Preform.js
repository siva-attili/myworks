import React, { Component } from "react";
export default class Preform extends Component() {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }
  render() {
    return (
      <div>
        <form>
        <div>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" />
        </div>
        <div>
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" />
        </div>
        <div>
            <button type="submit" >Login</button>
        </div>
        </form>
      </div>
    );
  }
}
