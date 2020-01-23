import * as React from "react";
import Child from "./Child";
interface State {
  name: String;
}
export default class Parent extends React.Component<{}, State> {
  state: State = {
    name: "Parent data"
  };
  render() {
    return <Child name={this.state.name} />;
  }
}
