import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Header2 } from "./common/Header2";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { SoftIdeas } from "./components/SoftIdeas";
import { Contact } from "./components/Contact";
import { PageNotFound } from "./components/PageNotFound";

const App2 = () => {
  const [input, setInput] = React.useState({ checked: false });
  const handleCheck = (toggle:any) => {
    setInput({
        checked: toggle
    });
  };
  return (
    <Router>
        <Header2 checked={input.checked} />
        <div onClick={()=>handleCheck(false)}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/softideas" component={SoftIdeas} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App2;
