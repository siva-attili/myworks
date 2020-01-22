import React from "react";
const Demo = () => {
  const [input, setInput] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(result => {
        setInput(result);
      });
  });
  const post = () => {
    fetch("http://localhost:3000/data", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  return (
    <div>
      <h2>{username}</h2>
      <p>{password}</p>
      hello
    </div>
  );
};
export default Demo;
